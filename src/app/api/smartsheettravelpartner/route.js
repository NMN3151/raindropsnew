// src/app/api/smartsheettravelpartner/route.js

import { NextResponse } from 'next/server';

const SMARTSHEET_TOKEN = "MwgCjoloiv6VrRIZCOzmu3GyTaTr7YzGOJG1v";
const SMARTSHEET_SHEET_ID = "jH8jcWmfqpJq5ggVF4rx3WWm2Xc4gmmX3CHp3Q81";

async function getColumnIds() {
  console.log("📋 Step 1: Fetching sheet structure...");
  console.log("   Sheet ID:", SMARTSHEET_SHEET_ID);
  
  const response = await fetch(
    `https://api.smartsheet.com/2.0/sheets/${SMARTSHEET_SHEET_ID}`,
    {
      headers: {
        Authorization: `Bearer ${SMARTSHEET_TOKEN}`,
      },
    }
  );
  
  if (!response.ok) {
    const error = await response.text();
    console.error("❌ Failed to fetch sheet structure:", response.status);
    console.error("   Error details:", error);
    throw new Error(`Failed to fetch sheet: ${response.status} - ${error}`);
  }
  
  const data = await response.json();
  console.log("✅ Sheet structure fetched successfully");
  console.log("   Sheet name:", data.name);
  console.log("   Total columns:", data.columns.length);
  
  const columnMap = {};
  data.columns.forEach(col => {
    columnMap[col.title] = col.id;
    console.log(`   📌 Column: "${col.title}" → ID: ${col.id}`);
  });
  
  return columnMap;
}

export async function POST(req) {
  console.log("\n🚀 ========== NEW FORM SUBMISSION ==========");
  console.log("⏰ Timestamp:", new Date().toISOString());
  
  try {
    // Step 1: Parse request body
    console.log("\n📥 Step 2: Reading form data...");
    const body = await req.json();
    console.log("   Form data received:", {
      name: body.name,
      company: body.company,
      email: body.email,
      phone: body.phone,
      address: body.address ? body.address.substring(0, 50) + "..." : "",
      message: body.message ? body.message.substring(0, 50) + "..." : ""
    });

    const { name, company, email, phone, address, message } = body;

    // Step 2: Get column IDs
    console.log("\n🔍 Step 3: Mapping columns...");
    const columns = await getColumnIds();

    // Step 3: Prepare row data
    console.log("\n📝 Step 4: Preparing row data...");
    
    // Create cells with proper validation
    const rowData = [];
    
    if (name && name.trim()) {
      rowData.push({ columnId: columns["Name"], value: name.trim() });
    }
    if (company && company.trim()) {
      rowData.push({ columnId: columns["Company"], value: company.trim() });
    }
    if (email && email.trim()) {
      rowData.push({ columnId: columns["Email Address"], value: email.trim() });
    }
    if (phone && phone.trim()) {
      rowData.push({ columnId: columns["Phone Number"], value: phone.trim() });
    }
    if (address && address.trim()) {
      rowData.push({ columnId: columns["Address"], value: address.trim() });
    }
    if (message && message.trim()) {
      rowData.push({ columnId: columns["Message"], value: message.trim() });
    }

    console.log("   Row cells to insert:", rowData.length);
    rowData.forEach(cell => {
      console.log(`   ✓ Column ID ${cell.columnId}: "${cell.value.substring(0, 30)}..."`);
    });

    // Step 4: Send to Smartsheet
    console.log("\n📤 Step 5: Sending data to Smartsheet...");
    console.log("   API Endpoint:", `https://api.smartsheet.com/2.0/sheets/${SMARTSHEET_SHEET_ID}/rows`);
    
    const response = await fetch(
      `https://api.smartsheet.com/2.0/sheets/${SMARTSHEET_SHEET_ID}/rows`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${SMARTSHEET_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ 
          toBottom: true,
          rows: [{ cells: rowData }] 
        }),
      }
    );

    console.log("   Response status:", response.status);

    const result = await response.json();

    if (!response.ok) {
      console.error("\n❌ ========== SMARTSHEET API ERROR ==========");
      console.error("Status:", response.status);
      console.error("Error message:", result.message);
      console.error("Full error:", JSON.stringify(result, null, 2));
      console.error("==========================================\n");
      
      return NextResponse.json({ 
        error: result.message || "Failed to add row",
        details: result,
        hint: "Check console logs for detailed error information"
      }, { status: response.status });
    }

    console.log("\n✅ ========== SUCCESS ==========");
    console.log("Row added successfully!");
    console.log("Full result:", JSON.stringify(result, null, 2));
    console.log("================================\n");
    
    return NextResponse.json({ 
      success: true, 
      data: result,
      message: "Data successfully added to Smartsheet"
    });
    
  } catch (err) {
    console.error("\n💥 ========== SERVER ERROR ==========");
    console.error("Error type:", err.name);
    console.error("Error message:", err.message);
    console.error("Stack trace:", err.stack);
    console.error("====================================\n");
    
    return NextResponse.json({ 
      error: err.message,
      type: err.name,
      stack: process.env.NODE_ENV === 'development' ? err.stack : undefined,
      hint: "Check server console for detailed error information"
    }, { status: 500 });
  }
}
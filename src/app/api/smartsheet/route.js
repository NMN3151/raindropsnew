import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const formData = await req.json();

    // Debug log
    console.log("Received form data:", formData);

    const response = await fetch(
      "https://api.smartsheet.com/2.0/sheets/xmFrrRJW7vh7549hFM6Rfqg259p2WV8mgh4Fm3w1/rows",
      {
        method: "POST",
        headers: {
          "Authorization": "Bearer MwgCjoloiv6VrRIZCOzmu3GyTaTr7YzGOJG1v",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          toBottom: true,
          cells: [
            { columnId: 2319879345229700, value: formData.email },
            { columnId: 250142859677572, value: formData.name },
            { columnId: 6823478972600196, value: formData.contact },
            { columnId: 1193979438387076, value: formData.checkIn },
            { columnId: 5697579065757572, value: formData.checkOut },
            { columnId: 8589940435406724, value: formData.adult },
            { columnId: 427166110797700, value: formData.child },
            { columnId: 4930765738168196, value: formData.room },
            { columnId: 2678965924482948, value: formData.exbed }, 
          ],
        }),
      }
    );

    // Debug log
    console.log("Smartsheet response status:", response.status);

    if (!response.ok) {
      const errorBody = await response.text(); // Read raw text if JSON fails
      console.error("Smartsheet error:", errorBody);
      return NextResponse.json(
        { success: false, error: errorBody || "Unknown Smartsheet error" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("API route error:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Unknown server error" },
      { status: 500 }
    );
  }
}

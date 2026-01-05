import Link from 'next/link';
import React from 'react'


function RoomCardOne(props) {
    const {
        Slug,
        Img,
        Title,
        Title2,
        Price
    } = props;
    return (
        <div className="room__slide__box radius-6">
            <Link href={`/room/${Slug || "details"}`} className="room__title">
            <div className="room__thumbnail jara-mask-2 jarallax">
                <img
                    height={585}
                    width={420}
                    className="radius-6 jarallax-img"
                    src={Img || '/assets/images/pages/room/1.webp'}
                    alt=""
                />
            </div>
            </Link>
            <div className="room__content">
                <Link href={`/room/${Slug || "details"}`} className="room__title">
                    <h5>{Title || "The Ritz-Carlton"}</h5>
                     
                </Link>
  <span > <h5 style={{color :"#eeb46cff"}}>{Title2 || "The Ritz-Carlton"}
  </h5>
  </span>
                <div className="room__content__meta">
                   
                     {/* <span> */}
                        {/* <i className="flaticon-bed" /> Double Bed */}
                     {/* </span> */}
                    {/* <span> */}
                        {/* <i className="flaticon-construction" /> 35 sqm */}
                    {/* </span> */}
                    {/* <span> */}
                        {/* <i className="flaticon-user" />2 Person */}
                    {/* </span> */}
                </div>
                <span className="h4 rent mb-0 mt-15 d-block">{Price || ''}</span>
            </div>
        </div>
    )
}

export default RoomCardOne
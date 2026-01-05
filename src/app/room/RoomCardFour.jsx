import Link from 'next/link';
import React from 'react'


function RoomCardFour(props) {
    const {
        Slug,
        Img,
        Title,
        Title2,
        Price,
        About
      } = props;
    return (
        <>
            <div className="room__card">
                <div className="room__card__top">
                    <div className="room__card__image">
                        <Link href={`/room/${Slug || "details"}`}>
                            <img
                                src={Img || "/assets/images/pages/room/1.webp"}
                                width={420}
                                height={310}
                                alt="room card"
                            />
                        </Link>
                    </div>
                    <div className="room__price__tag">
                        <span className="h6 d-block">{Price || ''}</span>
                    </div>
                </div>
                
                <div className="room__card__meta">
                    <Link href={`/room/${Slug || "details"}`} className="room__card__title h5">
                        {Title || "Deluxe Room"}
                    </Link>
                    <div className="room__price__tag">
                     <span className="h6 d-block">{Title2 || ''}</span>
                    </div>
                     {/* <div className="room__card__meta">
                     <span className="">{About || ''}</span>
                    </div> */}
                    {/* <div className="room__card__meta__info">
                        <span>
                            <i className="flaticon-construction" />
                            35 sqm
                        </span>
                        <span>
                            <i className="flaticon-user" />5 Person
                        </span>
                    </div> */}
                    
                    <p className="font-sm">
                        {About ? (About.length > 100 ? About.substring(0, 100) + '...' : About) : ''}
                    </p>
    
                    <Link href={`/room/${Slug || "details"}`} className="room__card__link">
                        Discover More
                    </Link>
                </div>
            </div>
        </>
    )
}

export default RoomCardFour
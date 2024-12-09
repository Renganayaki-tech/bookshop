import React from 'react'
import Cooking1 from './satvicCook.webp'
import Cooking2 from './Cooking1.jpg'
import Cooking3 from './Cooking2.jpg'
import Cooking4 from './Cooking3.jpg'

export default function Cook() {

    return (
        <div>
            <div className="container-fluid mt-5 d-flex gap-5">
                <div className="card" style={{ width: "18rem" }}>
                    <img src={Cooking1} className="card-img-top" alt="..." heigt={415} />
                    <div className="card-body">
                        <p className="card-title text-center text-secondary font-weight-bold">PLANT KING</p>
                        <h6 className="card-text text-center">Root Nuture Grow</h6>
                        <p className='text-center text-secondary font-weight-bold'>Rs.350</p>
                    </div>
                </div>
                <div className="card" style={{ width: "18rem" }}>
                    <img src={Cooking2} className="card-img-top" alt="..." height={415} />
                    <div className="card-body">
                        <p className="card-title text-center text-secondary font-weight-bold">PLANT KING</p>
                        <h6 className="card-text text-center">Root Nuture Grow</h6>
                        <p className='text-center text-secondary font-weight-bold'>Rs.350</p>
                    </div>
                </div>
                <div className="card" style={{ width: "18rem" }}>
                    <img src={Cooking3} className="card-img-top" alt="..." height={415} />
                    <div className="card-body">
                        <p className="card-title text-center text-secondary font-weight-bold">PLANT KING</p>
                        <h6 className="card-text text-center">Root Nuture Grow</h6>
                        <p className='text-center text-secondary font-weight-bold'>Rs.350</p>
                    </div>
                </div>
                <div className="card" style={{ width: "18rem" }}>
                    <img src={Cooking4} className="card-img-top" alt="..." height={415} />
                    <div className="card-body">
                        <p className="card-title text-center text-secondary font-weight-bold">PLANT KING</p>
                        <h6 className="card-text text-center">Root Nuture Grow</h6>
                        <p className='text-center text-secondary font-weight-bold'>Rs.350</p>
                    </div>
                </div>
            </div>


        </div>
    )
}

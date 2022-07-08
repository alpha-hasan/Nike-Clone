import React from 'react'
import { useParams, useNavigate } from "react-router-dom";

const shoes = {
    "air-jordan-3-valor-blue": {
        name: "VALOUR BLUE",
        img:
            "https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?$SNKRS_COVER_WD$&align=0,1",
        desc: 'The Air Jordan 3 "Valour Blue" remains an all-time favourite silhouette worldwide. While the design has hit shelves in an astonishing range of materials and colours, some iterations are tougher to track down than others.'
    },
    "jordan-mars-270-london": {
        name: "JORDAN MARS 270 LONDON",
        img:
            "https://secure-images.nike.com/is/image/DotCom/CV3042_001_A_PREM?$SNKRS_COVER_WD$&align=0,1",
        desc: "Celebrating the great city of London, this Jordan Mars 270 iteration came to stores in March 2020. Grey leather mudguards define the shoe's lower silhouette, complementing black suede on the toe box."
    },
    "air-jordan-1-zoom-racer-blue": {
        name: "RACER BLUE",
        img:
            "https://secure-images.nike.com/is/image/DotCom/CK6637_104_A_PREM?$SNKRS_COVER_WD$&align=0,1",
        desc: 'This Jordan 1 Retro High consists of a white leather upper with a mixture of mesh, patent leather, and translucent TPU overlays. An icy outsole, blue interior, and Zoom branding above the Swoosh completes the design.'
    }
};

export const LaunchShoe = () => {
    const { slug } = useParams();
    let navigate = useNavigate()
    return (
        // <div>LaunchShoe {slug}</div>
        <div class="container col-xxl-9 px-4 d-flex">
            <div class="row flex-lg-row-reverse align-items-center g-5">
                <div class="col-sm col-lg-6">
                    <img src={shoes[slug] ? shoes[slug].img : 'Not Found'} class="d-block mx-lg-auto img-fluid" alt="Shoes" width="700" height="500" />
                </div>
                <div class="col-lg-6">
                    <h1 class="display-5 fw-bold lh-1 mb-3">{shoes[slug] ? shoes[slug].name : 'Not Found'}</h1>
                    <p class="lead">{shoes[slug] ? shoes[slug].desc : 'Not Found'}</p>
                    <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                        <button type="button" className="btn btn-outline-dark btn-lg px-4 me-md-2" style={{ borderRadius: '30px' }}>Buy Now</button>
                        <button type="button" class="btn btn-outline-secondary btn-lg px-4" style={{ borderRadius: '30px' }} onClick={() => navigate('/launch')}>Go Back</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
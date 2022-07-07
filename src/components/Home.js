import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
    return (
        <div className='container' style={{ backgroundImage: "url(https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_1487,c_limit/0c4ecc85-f8e5-4c84-a09d-a692ea937150/nike-just-do-it.jpg)", backgroundPosition: 'center', width: '100%', height: '650px' }}>
            <div className="container col-xxl-8 px-4 py-5">
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div className="col-10 col-sm-8 col-lg-6">
                    </div>
                    <Link className='col-lg-6 nav-link' to={'/launch'}>
                        <h1 className="display-5 fw-bold lh-1 mb-3 text-light" style={{ fontSize: '72px' }}>STYLES FOR SUMMER</h1>
                        <p className="lead text-light fw-bold">Make the most of those long summer days with essentials for the season.</p>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                            <button type="button" className="btn btn-light btn-lg px-4 me-md-2" style={{ borderRadius: '30px' }}>Launch</button>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

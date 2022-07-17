import { Link } from 'react-router-dom'
const shoes = {
    "air-jordan-3-valor-blue": {
        name: "VALOUR BLUE",
        img:
            "https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"
    },
    "jordan-mars-270-london": {
        name: "JORDAN MARS 270 LONDON",
        img:
            "https://secure-images.nike.com/is/image/DotCom/CV3042_001_A_PREM?$SNKRS_COVER_WD$&align=0,1"
    },
    "air-jordan-1-zoom-racer-blue": {
        name: "RACER BLUE",
        img:
            "https://secure-images.nike.com/is/image/DotCom/CK6637_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"
    }
};



export const LaunchIndex = () => {
    return (
        <div id="carouselExampleDark" className="container carousel carousel-dark slide" style={{ maxWidth: '35%' }} data-bs-interval="false">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                {Object.entries(shoes).map(([slug, { name, img }], index) =>
                    <Link key={slug} className={`carousel-item ${index === 0 ? 'active' : ''}`} to={`/launch/${slug}`}>
                        <img src={img} className="d-block w-100" alt={name} />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>{name}</h5>
                        </div>
                    </Link>
                )}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}

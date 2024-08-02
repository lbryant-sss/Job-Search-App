import Menubar from "../assets/menubar.svg";

export default function Landingpage() {
    return(
        <>
            <section className="landing-page">
                <div className="nav-wrapper">
                    <span>
                        <img src={Menubar} alt="Menu Bar Icon" />
                    </span>
                    <h1>
                        Find your dream job
                    </h1>
                </div>
                <div className="hero-wrapper">
                    <div className="horizontal-scroll">
                        <span className="all-categories">All</span>
                        <ul className="">
                            <li>Category</li>
                            <li>Category</li>
                            <li>Category</li>
                            <li>Category</li>
                            <li>Category</li>
                            <li>Category</li>
                        </ul>
                    </div>
                    <div className="card-wrapper">
                        <div className="job-card">
                            <div className="company">
                                <img src="" alt="" />
                                <span>Google</span>
                                <span>Posted: 2 weeks ago</span>
                            </div>
                            <div className="job-title">
                                <span>Software Engineering</span>
                                <span>Carlifonia</span>
                                <span>Apply</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
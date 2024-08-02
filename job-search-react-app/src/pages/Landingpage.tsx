import Menubar from "../assets/menubar.svg";
import Google from "../assets/Google__G__logo.svg";
import Prof1 from "../assets/prof1.png";
export default function Landingpage() {
    return(
        <>
            <section className="landing-page">
                <div className="nav-wrapper">
                    <span>
                        <img src={Menubar} alt="Menu Bar Icon" />
                    </span>
                    <div className="nav">
                        <ul>
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <div className="hero">
                        <img src={Prof1} />
                        <h1>
                            Find your dream job
                        </h1>
                    </div>
                </div>
                <div className="hero-wrapper">
                    <div className="horizontal-scroll">
                        <span className="all-categories">All</span>
                        <ul className="">
                            <li>Category</li>
                            <li>Category</li>
                            <li>Category</li>
                        </ul>
                    </div>
                    <div className="card-wrapper">
                        <div className="job-card">
                            <div className="company">
                                <img src={Google} alt="Company Logo" />
                                <span className="company-name">Google</span>
                                <span className="date-posted">Posted: 2 weeks ago</span>
                            </div>
                            <div className="job-tile">
                                <span className="job-title">Software Engineering</span>
                                <span className="apply">Apply</span>
                            </div>
                        </div>
                        <div className="job-card">
                            <div className="company">
                                <img src={Google} alt="Company Logo" />
                                <span className="company-name">Google</span>
                                <span className="date-posted">Posted: 2 weeks ago</span>
                            </div>
                            <div className="job-tile">
                                <span className="job-title">Software Engineering</span>
                                <span className="apply">Apply</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
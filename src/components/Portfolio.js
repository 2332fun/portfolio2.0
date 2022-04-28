import React from "react";
import Project from "./Project";
import weatherImg from "../assets/images/CityWeather.png";
import trackImg from "../assets/images/EmployeeTrackDB.png";
import musicImg from "../assets/images/music-dashboard.png";
import puppyImg from "../assets/images/Puppy-Love.png";
import socialImg from "../assets/images/Socially-NoSQL.png";
import groupImg from "../assets/images/groupProject.png";

function Portfolio (props) {
    return (
        <section>
            <h1 id="portfolio">
                Portfolio
            </h1>
            <div className="SplitPane">
                {" "}
                {props.left}
                <div className="SplitPane-Left">
                    {/* Group Project NAMEPLACEHOLDER */}
                    <Project
                        title="Great-Reads"
                        image={groupImg}
                        href="https://github.com/cphill11/great-reads"
                    />

                    {/* Group Project Puppy-Love */}
                    <Project
                        title="Puppy-Love"
                        image={puppyImg}
                        href="https://github.com/Zsvoboda87/Puppy-Love"
                    />
                    
                    {/* Group Project music-dashboard */}
                    <Project
                        title="music-dashboard"
                        image={musicImg}
                        href="https://github.com/mtornabene05/music-dashboard"
                    />
                </div>
                <div className="SplitPane-Right">
                    {/* Weather API Challenge */}
                    <Project
                        title="CityWeather"
                        image={weatherImg}
                        href="https://github.com/2332fun/CityWeather"
                    />

                    {/* Employee Track Database Challenge */}
                    <Project
                        title="EmployeeTrackDB"
                        image={trackImg}
                        href="https://github.com/2332fun/EmployeeTrackDB"
                    />

                    {/* Social Network NoSQL Challenge */}
                    <Project
                        title="Socially-NoSQL"
                        image={socialImg}
                        href="https://github.com/2332fun/Socially-NoSQL"
                    />
                </div>
            </div>
        </section>
    );
}

export default Portfolio;
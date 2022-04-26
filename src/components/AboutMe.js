import React from "react";

import myImage from "../assets/images/myImage.png";
import '../index.css';

function AboutMe() {
    return (
        // class my-5 = (m) margin (y) top & bottom - (5) $spacer-y * 3
        <section>
            <h1 id="aboutMe">About Me</h1>
            <div id="aboutMeP">
                {/* Recent photo and short bio */}
                <img
                    class="photo"
                    src={myImage}
                    className="photo"
                    style={{ width: "25" }}
                    alt="Diana Taylor's physical profile"
                />
                <div className="my-2" id="summary">
                    <p>
                    I am a graduate from Case Western Reserve University coding bootcamp.
                    Originally my goal was to obtain a bachelor's degree in Business (administration, preferably) and pursue a career in management. However, that has changed to desiring a position in the coding field. I am excited for the opportunities this will open up to me in the software development field! In CWRU, we have studied a broad range of both frontend and backend Javascript coding over the course of 6 months. I have mostly been enjoying the backend aspects (such as server-side API, MongoDB, and CRUD) with an understanding for frontend.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;
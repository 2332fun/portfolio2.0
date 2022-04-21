import React from "react";

import myImage from "../assets/images/myImage.png";
import '../index.css';

function AboutMe() {
    return (
        // class my-5 = (m) margin (y) top & bottom - (5) $spacer-y * 3
        <section>
            <h1 id="aboutMe">About Me</h1>
            {/* Recent photo and short bio */}
            <img
                src={myImage}
                className="photo"
                style={{ width: "25" }}
                alt="Diana Taylor's physical profile"
            />
            <div className="my-2" id="summary">
                <p>
                    AboutMeParagraphPlaceholder
                </p>
            </div>
        </section>
    );
}

export default AboutMe;
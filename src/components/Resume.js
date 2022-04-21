import React from "react";
import pdf from "../assets/small/resume.pdf";
import '../index.css';

function Resume() {
    return (
        <section>
            <h1 id="resume">Resume</h1>
            <div id="skillset">
                <ul>
                    <li>HTML / CSS / Javascript</li>
                    <li>Git</li>
                    <li>MERN Stack</li>
                    <li>SQL / NoSQL</li>
                    <li>Group Projects: Back End and Full Stack</li>
                </ul>
            </div>
            <div>
                <a
                href={pdf}
                id="pdf"
                className="my-4"
                target="_blank"
                rel="noreferrer"
                >
                    Resume Download (PDF)
                </a>
            </div>
        </section>
    );
}

export default Resume;
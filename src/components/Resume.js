import React from "react";
import pdf from "../assets/small/resume.pdf";
import '../index.css';

function Resume() {
    return (
        <section>
            <h1 id="resume">Resume</h1>
            <div id="skillset">
                <ul>
                    <li>Frontend:</li>
                        <p>Javascript, Jquery, HTML, CSS, Handlebars, React.</p>
                    <li>Backend:</li>
                        <p>Server-side API, ORM, MVC, MongoDB, Insomnia, REST, CRUD. </p>
                    <li>Below is my downloadable resume!</li>
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
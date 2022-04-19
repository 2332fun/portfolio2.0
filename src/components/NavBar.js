import React from "react";
import '../index.css';

function NavBar({ currentPage, handlePageChange }) {
    return (
        <header>
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <a
                        href="#aboutMe"
                        onClick={() => handlePageChange("AboutMe")}
                        className={currentPage === "AboutMe" ? "nav-link active" : "nav-link"}
                    >
                        About Me
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        href="#resume"
                        onClick={() => handlePageChange("Resume")}
                        className={
                            currentPage === "Resume" ? "nav-link active" : "nav-link"
                        }
                    >
                        Resume
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        href="#portfolio"
                        onClick={() => handlePageChange("Portfolio")}
                        className={
                            currentPage === "Portfolio" ? "nav-link active" : "nav-link"
                        }
                    >
                        Portfolio
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        href="#contactInfo"
                        onClick={() => handlePageChange("ContactInfo")}
                        className={
                            currentPage === "Contact" ? "nav-link active" : "nav-link"
                        }
                    >
                        Contact Info
                    </a>
                </li>
            </ul>
        </header>
    );
}

export default NavBar;
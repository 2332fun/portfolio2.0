import React from "react";
import '../index.css';

const Project = (props) => {
    return (
        <>
            <div>{props.title}</div>
            <a href={props.href}>
                <img src={props.image} className="projects" alt=""></img>
            </a>
        </>
    );
}

export default Project;
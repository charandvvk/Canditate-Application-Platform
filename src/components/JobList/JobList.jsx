import React from "react";
import JobCard from "../JobCard/JobCard";
import classes from "./JobList.module.css";

export default function JobList({ jobs }) {
    return (
        <div className={classes["job-list"]}>
            {jobs.map((job, index) => (
                <JobCard key={index} job={job} />
            ))}
        </div>
    );
}

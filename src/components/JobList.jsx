import React from "react";
import JobCard from "./JobCard";

export default function JobList({ jobs }) {
    return (
        <>
            {jobs.map((job, index) => (
                <JobCard key={index} job={job} />
            ))}
        </>
    );
}

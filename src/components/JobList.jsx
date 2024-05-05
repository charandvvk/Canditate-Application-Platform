import React, { useEffect, useState } from "react";
import JobCard from "./JobCard";

export default function JobList() {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const body = JSON.stringify({
            limit: 10,
            offset: 0,
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body,
        };

        fetch(
            "https://api.weekday.technology/adhoc/getSampleJdJSON",
            requestOptions
        )
            .then((response) => response.json())
            .then((result) => setJobs(result.jdList))
            .catch((error) => console.error(error));
    }, []);

    return (
        <>
            {jobs.map((job, index) => (
                <JobCard key={index} job={job} />
            ))}
        </>
    );
}

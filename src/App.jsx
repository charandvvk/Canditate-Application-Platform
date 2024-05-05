import { useEffect, useState } from "react";
import "./App.css";
import Filters from "./components/Filters";
import JobList from "./components/JobList";
import filter from "./utils/filter";

function App() {
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

    const filteredJobs = filter(jobs.map((job) => ({ ...job })));
    const locations = jobs.map((job) => job.location);

    return (
        <>
            <Filters locations={locations} />
            <JobList jobs={filteredJobs} />
        </>
    );
}

export default App;

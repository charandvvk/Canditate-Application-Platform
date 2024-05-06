import { useEffect, useState } from "react";
import classes from "./App.module.css";
import Filters from "./components/Filters/Filters";
import JobList from "./components/JobList/JobList";
import filter from "./utils/filter";

function App() {
    const [jobs, setJobs] = useState([]);
    const [offset, setOffset] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    const getJobs = () => {
        setIsLoading(true);
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const body = JSON.stringify({
            limit: 10,
            offset,
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
            .then((result) => {
                setJobs((prev) => [...prev, ...result.jdList]);
                setIsLoading(false);
            })
            .catch((error) => console.error(error));
    };

    useEffect(() => {
        getJobs();
    }, [offset]);

    const handelInfiniteScroll = () => {
        if (
            window.innerHeight + document.documentElement.scrollTop ===
            document.documentElement.scrollHeight
        ) {
            setIsLoading(true);
            setOffset((prev) => prev + 10);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handelInfiniteScroll);
        return () => window.removeEventListener("scroll", handelInfiniteScroll);
    }, []);

    const roles = [...new Set(jobs.map((job) => job.jobRole))];

    const filteredJobs = filter(jobs.map((job) => ({ ...job })));

    return (
        <>
            <Filters roles={roles} />
            <JobList jobs={filteredJobs} />
            {isLoading && (
                <div className={classes.loading}>Loading jobs...</div>
            )}
        </>
    );
}

export default App;

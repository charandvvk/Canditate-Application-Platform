import { useEffect, useState } from "react";
import classes from "./App.module.css";
import JobList from "./components/JobList/JobList";
import filter from "./utils/filter";
import FiltersList from "./components/FiltersList/FiltersList";

function App() {
    const [jobs, setJobs] = useState([]);
    const [offset, setOffset] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

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
            })
            .catch(() =>
                setError(
                    "Unable to load data. Please check your internet connection or try again later as the server may be down."
                )
            )
            .finally(() => setIsLoading(false));
    };

    const handleInfiniteScroll = () => {
        if (
            window.innerHeight + document.documentElement.scrollTop ===
            document.documentElement.scrollHeight
        ) {
            setIsLoading(true);
            setOffset((prevState) => prevState + 10);
        }
    };

    useEffect(() => {
        getJobs();
    }, [offset]);

    useEffect(() => {
        window.addEventListener("scroll", handleInfiniteScroll);
        return () => window.removeEventListener("scroll", handleInfiniteScroll);
    }, []);

    const roles = [...new Set(jobs.map((job) => job.jobRole))];
    const filteredJobs = filter(jobs);

    return (
        <>
            <FiltersList roles={roles} />
            <JobList jobs={filteredJobs} />
            {isLoading && (
                <div className={classes["text-center"]}>Loading jobs...</div>
            )}
            {error && <div className={classes["text-center"]}>{error}</div>}
        </>
    );
}

export default App;

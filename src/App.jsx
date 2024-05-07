import { useEffect, useState } from "react";
import classes from "./App.module.css";
import JobList from "./components/JobList/JobList";
import filter from "./utils/filter";
import FiltersList from "./components/FiltersList/FiltersList";

function App() {
    // state management for jobs, offset, loading, and error
    const [jobs, setJobs] = useState([]);
    const [offset, setOffset] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    // function to get api data and manage related states
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
                setJobs((prev) => [...prev, ...result.jdList]); // add newly fetched jobs to the list of existing jobs
            })
            .catch(() =>
                setError(
                    "Unable to load data. Please check your internet connection or try again later as the server may be down."
                )
            )
            .finally(() => setIsLoading(false));
    };

    useEffect(() => {
        getJobs();
    }, [offset]);

    // function to trigger the fetching of more jobs on infinite scroll
    const handleInfiniteScroll = () => {
        if (
            window.innerHeight + document.documentElement.scrollTop ===
            document.documentElement.scrollHeight
        ) {
            setIsLoading(true);
            setOffset((prevState) => prevState + 10); // change in offset leads to the execution of the useEffect with offset as dependency
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleInfiniteScroll);
        return () => window.removeEventListener("scroll", handleInfiniteScroll);
    }, []);

    const roles = [...new Set(jobs.map((job) => job.jobRole))]; // create an array of options for dropdown
    const filteredJobs = filter(jobs); // pass the unfiltered jobs to the imported filter function

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

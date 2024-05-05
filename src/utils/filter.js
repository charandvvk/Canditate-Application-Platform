import { useSelector } from "react-redux";

function filter(jobs) {
    const { experience } = useSelector((state) => state.filters);

    const filteredJobs = jobs.filter((job) => job.minExp <= experience);

    return filteredJobs;
}

export default filter;

import { useSelector } from "react-redux";

function filter(jobs) {
    const { experience, pay } = useSelector((state) => state.filters);

    const filteredJobs = jobs.filter(
        (job) => job.minExp <= experience && job.maxJdSalary >= pay
    );

    return filteredJobs;
}

export default filter;

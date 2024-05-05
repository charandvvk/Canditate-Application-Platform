import { useSelector } from "react-redux";

function filter(jobs) {
    const { experience, locations, pay } = useSelector(
        (state) => state.filters
    );

    const filteredJobs = jobs.filter((job) => {
        const isExperiencePass = job.minExp <= experience;
        let isLocationPass = true;
        if (locations.length) {
            isLocationPass = false;
            if (job.location === "remote") {
                if (locations.includes("Remote")) isLocationPass = true;
            } else {
                if (locations.includes("In-office")) isLocationPass = true;
            }
        }
        const isPayPass = job.maxJdSalary >= pay;
        return isExperiencePass && isLocationPass && isPayPass;
    });

    return filteredJobs;
}

export default filter;

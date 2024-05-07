import { useSelector } from "react-redux";

export default function filter(jobs) {
    const { roles, experience, locations, pay, company } = useSelector(
        (state) => state.filters
    );

    const filteredJobs = jobs.filter((job) => {
        // role filter
        let isRolesPass = true;
        if (roles.length) isRolesPass = roles.includes(job.jobRole);

        // experience filter
        const isExperiencePass = job.minExp && job.minExp <= (experience ?? 10);

        // location filter
        let isLocationPass = true;
        if (locations.length) {
            isLocationPass = false;
            if (job.location === "remote") {
                if (locations.includes("Remote")) isLocationPass = true;
            } else if (job.location) {
                if (locations.includes("In-office")) isLocationPass = true;
            }
        }

        // pay filter
        const isPayPass = job.maxJdSalary && job.maxJdSalary >= (pay ?? 0);

        // company filter
        const isCompanyPass =
            job.companyName &&
            job.companyName.toLowerCase().includes(company.toLowerCase());

        // filter only if all the above filters are passed through
        return (
            isRolesPass &&
            isExperiencePass &&
            isLocationPass &&
            isPayPass &&
            isCompanyPass
        );
    });

    return filteredJobs;
}

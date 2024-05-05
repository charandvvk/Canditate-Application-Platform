import React from "react";

export default function JobCard({ job }) {
    return (
        <div>
            {job.jobRole} - {job.minExp} - {job.maxJdSalary} - {job.location} -{" "}
            {job.companyName}
        </div>
    );
}

import React from "react";

export default function JobCard({ job }) {
    return (
        <div>
            {job.minExp} {job.maxJdSalary}
        </div>
    );
}

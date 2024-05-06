import React from "react";
import classes from "./JobCard.module.css";

export default function JobCard({ job }) {
    const daysAgo = Math.floor(Math.random() * 13 + 1);
    return (
        <div className={classes["job-card"]}>
            <div className={classes["days-ago"]}>
                ⏳ Posted {daysAgo} day{daysAgo > 1 && "s"} ago
            </div>
            <div className={`${classes.details} ${classes["mb-10"]}`}>
                <img src={job.logoUrl} alt="logo" className={classes.logo} />
                <div>
                    <div className={classes["mb-5"]}>{job.companyName}</div>
                    <div className={classes["mb-5"]}>{job.jobRole}</div>
                    <div>{job.location}</div>
                </div>
            </div>
            <div className={classes["mb-20"]}>
                Estimated Salary: ₹{job.minJdSalary} - {job.maxJdSalary} LPA ✅
            </div>
            <div className={classes["mb-5"]}>About Company:</div>
            <div className={classes["mb-5"]}>Abous us</div>
            <div>{job.jobDetailsFromCompany}</div>
            <div className={classes["mb-10"]}>Minimum Experience</div>
            <div className={classes["mb-20"]}>
                {job.minExp} year{job.minExp > 1 && "s"}
            </div>
            <button className={`${classes.btn} ${classes["btn--apply"]}`}>
                ⚡️ Easy Apply
            </button>
            <button className={`${classes.btn} ${classes["btn--referral"]}`}>
                Unlock referral asks
            </button>
        </div>
    );
}

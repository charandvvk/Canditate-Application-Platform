import React from "react";
import classes from "./JobCard.module.css";

// function to capitalize every word in a string
const capitalize = (string) =>
    string.replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase());

export default function JobCard({ job }) {
    const daysAgo = Math.floor(Math.random() * 13 + 1); // generate a random number for days ago

    return (
        <div className={classes["job-card"]}>
            <div className={classes["days-ago"]}>
                ⏳ Posted {daysAgo} day{daysAgo > 1 && "s"} ago
            </div>
            <div className={`${classes.details} ${classes["mb-10"]}`}>
                {job.logoUrl && (
                    <img
                        src={job.logoUrl}
                        alt="logo"
                        className={classes.logo}
                    />
                )}
                <div>
                    <div
                        className={`${classes["mb-5"]} ${classes["font-large"]} ${classes["font-bold"]} ${classes.title}`}
                    >
                        {job.companyName}
                    </div>
                    <div
                        className={`${classes["mb-5"]} ${classes["font-large"]}`}
                    >
                        {capitalize(job.jobRole)}
                    </div>
                    <div>{capitalize(job.location)}</div>
                </div>
            </div>
            <div
                className={`${classes["mb-20"]} ${classes["font-large"]} ${classes["font-bold"]} ${classes.salary}`}
            >
                Estimated Salary: ₹{job.minJdSalary && `${job.minJdSalary} -`}{" "}
                {job.maxJdSalary} LPA ✅
            </div>
            {job.jobDetailsFromCompany && (
                <>
                    <div
                        className={`${classes["mb-5"]} ${classes["font-large"]}`}
                    >
                        About Company:
                    </div>
                    <div
                        className={`${classes["mb-5"]} ${classes["font-large"]} ${classes["font-bold"]}`}
                    >
                        Abous us
                    </div>
                    <div className={`${classes["mb-20"]}`}>
                        {job.jobDetailsFromCompany}
                    </div>
                </>
            )}
            <div
                className={`${classes["mb-10"]} ${classes["font-large"]} ${classes["font-bold"]} ${classes.title}`}
            >
                Minimum Experience
            </div>
            <div className={`${classes["mb-20"]} ${classes["font-large"]}`}>
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

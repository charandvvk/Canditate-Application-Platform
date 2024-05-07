import React from "react";
import LocationsFilter from "../LocationsFilter";
import RolesFilter from "../RolesFilter";
import classes from "./Filters.module.css";
import ExperienceFilter from "../ExperienceFilter";
import PayFilter from "../PayFilter";
import CompanyFilter from "../CompanyFilter/CompanyFilter";

export default function Filters({ roles }) {
    return (
        <div className={classes.filters}>
            <RolesFilter roles={roles} />

            <ExperienceFilter />

            <LocationsFilter />

            <PayFilter />

            <CompanyFilter />
        </div>
    );
}

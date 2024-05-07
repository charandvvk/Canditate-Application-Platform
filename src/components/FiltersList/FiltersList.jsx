import React from "react";
import LocationsFilter from "../LocationsFilter";
import RolesFilter from "../RolesFilter";
import classes from "./FiltersList.module.css";
import ExperienceFilter from "../ExperienceFilter";
import PayFilter from "../PayFilter";
import CompanyFilter from "../CompanyFilter/CompanyFilter";

export default function FiltersList({ roles }) {
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

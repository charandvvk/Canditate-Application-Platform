import React from "react";
import { useDispatch } from "react-redux";
import { filtersActions } from "../store";
import LocationsFilter from "./LocationsFilter";
import RolesFilter from "./RolesFilter";

export default function Filters({ roles }) {
    const experienceOptions = [];
    for (let i = 1; i < 11; i++) {
        experienceOptions.push(
            <option key={i} value={i}>
                {i}
            </option>
        );
    }

    const payOptions = [];
    for (let i = 0; i < 8; i++) {
        payOptions.push(
            <option key={i} value={i * 10}>
                {i * 10}L
            </option>
        );
    }

    const dispatch = useDispatch();

    return (
        <>
            <RolesFilter roles={roles} />

            <select
                name="experience"
                id="experience"
                onChange={(event) =>
                    dispatch(filtersActions.setExperience(event.target.value))
                }
            >
                <option value={10}>Experience</option>
                {experienceOptions}
            </select>

            <LocationsFilter />

            <select
                name="pay"
                id="pay"
                onChange={(event) =>
                    dispatch(filtersActions.setPay(event.target.value))
                }
            >
                <option value={0}>Minimum Base Pay Salary</option>
                {payOptions}
            </select>
        </>
    );
}

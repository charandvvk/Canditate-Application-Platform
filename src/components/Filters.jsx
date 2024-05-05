import React from "react";
import { useDispatch } from "react-redux";
import { filtersActions } from "../store";
import LocationFilter from "./LocationFilter";

export default function Filters({ locations }) {
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

            <LocationFilter />

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

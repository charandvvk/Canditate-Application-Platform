import React from "react";
import { useDispatch } from "react-redux";
import { filtersActions } from "../store";

export default function Filters() {
    const experienceOptions = [];
    for (let i = 1; i < 11; i++) {
        experienceOptions.push(
            <option key={i} value={i}>
                {i}
            </option>
        );
    }

    const dispatch = useDispatch();

    return (
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
    );
}

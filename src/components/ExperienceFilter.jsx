import React from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { useDispatch, useSelector } from "react-redux";
import { filtersActions } from "../store";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const experienceOptions = [];
for (let i = 1; i < 11; i++) {
    experienceOptions.push(`${i}`);
}

export default function ExperienceFilter() {
    const { experience } = useSelector((state) => state.filters);

    const dispatch = useDispatch();

    const handleChange = (_, value) => {
        console.log(value);
        dispatch(
            filtersActions.setFilter({
                type: "experience",
                value: value ? parseInt(value) : null,
            })
        );
    };

    return (
        <div>
            {experience ? "Experience" : ""}
            <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={experienceOptions}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        placeholder={!experience ? "Experience" : ""}
                    />
                )}
                onChange={handleChange}
                popupIcon={<ExpandMoreIcon />}
            />
        </div>
    );
}

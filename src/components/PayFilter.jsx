import React from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { useDispatch, useSelector } from "react-redux";
import { filtersActions } from "../store";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const payOptions = [];
for (let i = 0; i < 8; i++) {
    payOptions.push(`${i * 10}L`);
}

export default function PayFilter() {
    const { pay } = useSelector((state) => state.filters);

    const dispatch = useDispatch();

    const handleChange = (_, value) => {
        dispatch(
            filtersActions.setPay(value ? parseInt(value.slice(0, -1)) : null)
        );
    };

    return (
        <div>
            {pay ? "Min Base Pay" : ""}
            <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={payOptions}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        placeholder={!pay ? "Min Base Pay Salary" : ""}
                    />
                )}
                onChange={handleChange}
                popupIcon={<ExpandMoreIcon />}
            />
        </div>
    );
}

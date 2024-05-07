import React from "react";
import Autocomplete from "@mui/material/Autocomplete";
import Chip from "@mui/material/Chip";
import TextField from "@mui/material/TextField";
import { useDispatch, useSelector } from "react-redux";
import { filtersActions } from "../store";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ClearIcon from "@mui/icons-material/Clear";

export default function RolesFilter(props) {
    const { roles } = useSelector((state) => state.filters);

    const dispatch = useDispatch();

    const handleChange = (_, value) => {
        dispatch(filtersActions.setFilter({ type: "roles", value }));
    };

    return (
        <div>
            {roles.length ? "Roles" : ""}
            <Autocomplete
                multiple
                id="tags-outlined"
                options={props.roles}
                getOptionLabel={(option) => option}
                filterSelectedOptions
                renderInput={(params) => (
                    <TextField
                        {...params}
                        placeholder={!roles.length ? "Roles" : ""}
                    />
                )}
                renderTags={(value, getTagProps) =>
                    value.map((option, index) => (
                        <Chip
                            key={index}
                            label={option}
                            {...getTagProps({ index })}
                            style={{
                                background: "rgb(230, 229, 229)",
                                borderRadius: "5px",
                            }}
                            deleteIcon={
                                <ClearIcon
                                    style={{
                                        margin: "0px",
                                    }}
                                />
                            }
                        />
                    ))
                }
                onChange={handleChange}
                popupIcon={<ExpandMoreIcon />}
            />
        </div>
    );
}

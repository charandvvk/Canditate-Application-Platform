import React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import { useDispatch } from "react-redux";
import { filtersActions } from "../store";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

function getStyles(name, rolesState, theme) {
    return {
        fontWeight:
            rolesState.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}

export default function RolesFilter({ roles }) {
    const theme = useTheme();
    const [rolesState, setRolesState] = React.useState([]);
    const dispatch = useDispatch();

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        const newValue = typeof value === "string" ? value.split(",") : value;
        setRolesState(newValue);
        dispatch(filtersActions.setRoles(newValue));
        // On autofill we get a stringified value.
    };

    return (
        <div>
            <FormControl sx={{ m: 1, width: 300 }}>
                <InputLabel id="demo-multiple-chip-label">Chip</InputLabel>
                <Select
                    labelId="demo-multiple-chip-label"
                    id="demo-multiple-chip"
                    multiple
                    value={rolesState}
                    onChange={handleChange}
                    input={
                        <OutlinedInput id="select-multiple-chip" label="Chip" />
                    }
                    renderValue={(selected) => (
                        <Box
                            sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}
                        >
                            {selected.map((value) => (
                                <Chip key={value} label={value} />
                            ))}
                        </Box>
                    )}
                    MenuProps={MenuProps}
                >
                    {roles.map((location, index) => (
                        <MenuItem
                            key={index}
                            value={location}
                            style={getStyles(name, rolesState, theme)}
                        >
                            {location}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}

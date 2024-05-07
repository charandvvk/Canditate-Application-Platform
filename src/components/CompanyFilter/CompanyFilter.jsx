import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filtersActions } from "../../store";
import classes from "./CompanyFilter.module.css";

export default function CompanyFilter() {
    const dispatch = useDispatch();
    const { company } = useSelector((state) => state.filters);

    return (
        <div>
            {company && <div>Company Name</div>}
            <input
                type="text"
                placeholder="Search Company Name"
                value={company}
                onChange={(event) =>
                    dispatch(
                        filtersActions.setFilter({
                            type: "company",
                            value: event.target.value,
                        })
                    )
                }
                className={classes.company}
            />
        </div>
    );
}

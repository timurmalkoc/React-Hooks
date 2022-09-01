import React from "react";

export default function SortBy(props){

    return(
        <select className="form-select w-50 mt-3" onChange={e => props.handleSort(e.target.value)}>
            <option value='id'>id</option>
            <option value='first_name'>First Name</option>
            <option value='last_name'>Last Name</option>
        </select>
    )

}
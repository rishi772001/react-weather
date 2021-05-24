import { TextField } from '@material-ui/core';
import React, { useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';

function SearchBar(props) {
    const [city, set] = useState("");
    const handleChange = (e) => {
        set(e.target.value);
    }
    const submit = () => {
        props.val(city);
    }
    return (
        <div style={{position:'relative'}}>
            <TextField onChange = {(e) => handleChange(e)} onSubmit={() => submit()} label="Search"/>
            <SearchIcon onClick = {() => submit()} style={{position: 'absolute', bottom: '25'}}/>
            <br /><br />
        </div>
    );
}

export default SearchBar;
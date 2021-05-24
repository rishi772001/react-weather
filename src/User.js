import { Avatar } from '@material-ui/core';
import React from 'react';

function User(props) {
    return (
        <div style={{position: 'relative', margin: '10px'}}>
            <span style={{position: 'absolute', left: '45px', top: '7px', fontWeight: 600}}>MS Dhoni</span>
            <Avatar alt="User" src="https://static.toiimg.com/photo/78275456.cms" />
        </div>
    );
}

export default User;
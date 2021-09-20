import React, { useEffect, useState } from 'react';
import axios from 'axios';
import User from './User';


const Users = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get("https://api.github.com/users")
            .then(res => {
                console.log(res);
                setUsers(res.data);
            }).catch(err => console.log(err))
    }, []);

    return <>
        <h1>Users</h1>
        {users.map(user => <User key={user.login} user={user} />)}
    </>
}

export default Users;

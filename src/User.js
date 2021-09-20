import React from 'react';

const User = ({ user }) => <>
    <img src={user.avatar_url} width="100" height="100" />
    <h1>{user.login}</h1>
</>

export default User;

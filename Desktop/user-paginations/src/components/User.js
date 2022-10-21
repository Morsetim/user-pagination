import React from 'react';
import './user.css';

function User({aaa, last, email, address, created, balance}) {
    return (
        <div>
            <table>
                <tr>
                    <th>First</th>
                    <th>Last</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Created</th>
                    <th>Balance</th>
                </tr>
                <tr>
                    <td>{aaa}</td>
                    <td>{last}</td>
                    <td>{email}</td>
                    <td>{address}</td>
                    <td>{created}</td>
                    <td>{balance}</td>
                </tr>
            </table>
        </div>
    )
}

export default User
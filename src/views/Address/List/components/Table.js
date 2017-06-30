import React from 'react';

import './Table.css';

export const TableRow = ({ address: { address, ward, district, city, country } }) => {
    return (
        <tr>
            <th scope="row">{address}</th>
            <td>{ward}</td>
            <td>{district}</td>
            <td>{city}</td>
            <td>{country}</td>
        </tr>
    );
}

export const Table = ({ addresses }) => {
    return (
        <table className="table table-striped">
            <thead>
                <tr className="tableHeader">
                    <th>Address</th>
                    <th>Ward</th>
                    <th>District</th>
                    <th>City</th>
                    <th>Country</th>
                </tr>
            </thead>
            <tbody>
                {addresses.map((address, index) => {
                    return <TableRow address={address} key={address.id} />
                })}
            </tbody>
        </table>
    );
};
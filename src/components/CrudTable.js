import React from 'react';
import CrudTableRow from './CrudTableRow';


const CrudTable = ({data}) => {
  console.log(data);
  return (
    <div>
      <h3>Employee Registry Table</h3>
      <table>
        <thead>
          <tr>
            <th>ID citizen</th>
            <th>Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Birthday</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Vaccinated?</th>
            <th>Vaccine Name</th>
            <th>Vaccine Date</th>
            <th>Vaccine Dose</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((el) => <CrudTableRow key={el.id} el={el}/>)}
        </tbody>
      </table>
    </div>
  )
}

export default CrudTable

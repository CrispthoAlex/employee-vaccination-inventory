import React from 'react';
import CrudTableRow from './CrudTableRow';

// Component to create Employee Inventory Table
const CrudTable = ({data, setDataToEdit, deleteData}) => {

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
          { data.length > 0 ? (data.map((el) => (
              <CrudTableRow
              key={el.id}
              el={el}
              setDataToEdit={setDataToEdit}
              deleteData={deleteData}
              />
            ))
          ) : (
            <tr>
              <td colSpan="12">Not Data</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}
// data.map((el) => <CrudTableRow key={el.id} el={el}/>)
export default CrudTable;

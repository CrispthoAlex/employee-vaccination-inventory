import React from 'react'


// Component to create each data in a row
const CrudTableRow = ({ el, setDataToEdit, deleteData }) => {
  let { id, idcitizen,
        name, lastname,
        email, birthday,
        address, phone,
        vaccinated, vaccinename,
        vaccinedate, vaccinedose } = el;

  return (
    <tr>
      <td>{idcitizen}</td>
      <td>{name}</td>
      <td>{lastname}</td>
      <td>{email}</td>
      <td>{birthday}</td>
      <td>{address}</td>
      <td>{phone}</td>
      <td>{vaccinated}</td>
      <td>{vaccinename}</td>
      <td>{vaccinedate}</td>
      <td>{vaccinedose}</td>
      <td>
          <button onClick={ () => setDataToEdit(el) } >Edit</button>
          <button onClick={() => deleteData(id)}>Delete</button>
      </td>
    </tr>
  );
}

export default CrudTableRow;

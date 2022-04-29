import React from 'react'

const CrudTableRow = (el) => {
  return (
    <tr>
      <td>{el.idcitizen}</td>
      <td>{el.name}</td>
      <td>{el.lastname}</td>
      <td>{el.email}</td>
      <td>{el.birthday}</td>
      <td>{el.address}</td>
      <td>{el.phone}</td>
      <td>{el.vaccinated}</td>
      <td>{el.vaccinename}</td>
      <td>{el.vaccinedate}</td>
      <td>{el.vaccinedose}</td>
      <td>
          <button>Edit</button>
          <button>Delete</button>
      </td>
    </tr>
  );
}

export default CrudTableRow;

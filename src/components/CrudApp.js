import React, {useState} from 'react';
import CrudForm from './CrudForm';
import CrudTable from './CrudTable';


// DB initial
const initialDb = [
    {
        id: 1,
        idcitizen: 123456789,
        name: "Lucy",
        lastname: "Fihum",
        email: "lucy.fihum@gmail.com",
        birthday: null,
        address: null,
        phone: null,
        vaccinated: false,
        vaccinename: null,
        vaccinedate: null,
        vaccinedose: 0,
    },
    {
        id: 2,
        idcitizen: 234567890,
        name: "Peter",
        lastname: "Parker",
        email: "man.spider@gmail.com",
        birthday: null,
        address: null,
        phone: null,
        vaccinated: false,
        vaccinename: null,
        vaccinedate: null,
        vaccinedose: 0,
    },
    {
        id: 3,
        idcitizen: 345678901,
        name: "Josh",
        lastname: "Brolin",
        email: "angry.hulk@gmail.com",
        birthday: null,
        address: null,
        phone: null,
        vaccinated: false,
        vaccinename: null,
        vaccinedate: null,
        vaccinedose: 0,
    }
]

const CrudApp = () => {
  const [db, setDb] = useState(initialDb);

  // Set the variable of state to create/update a data
  const [dataToEdit, setDataToEdit] = useState(null);
  /*
    Functions to manage the table
  */
  const createData = (data) => {
    data.id = Date.now();
    console.log("Before setDb ", data);
    setDb([...db, data]);
    console.log("After setDb ",db);
  };

  const updateData = (data) => {
    let newData = db.map(el => el.id === data.id ? data : el)
    setDb(newData);
  };

  const deleteData = (id) => {
    let isDelete = window.confirm(
      `Are you sure to delete '${id}'?`
    );
    if (isDelete) {
      // Create a new db without the elemt deleted
      setDb(db.filter((el) => el.id !== id));
    } else {return}
  };

  return (
    <div>
      <article className='grid-1-2'>
        <h2>MANAGE USERS</h2>
        <CrudForm
          createData={createData}
          updateData={updateData}
          dataToEdit={dataToEdit}
          setDataToEdit={setDataToEdit}
        />
        <CrudTable
          data={db}
          setDataToEdit={setDataToEdit}
          deleteData={deleteData}
        />
      </article>
    </div>
  );
}

export default CrudApp

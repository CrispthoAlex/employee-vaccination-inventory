import React, {useState} from 'react';
import CrudForm from './CrudForm';
import CrudTable from './CrudTable';



const CrudApi = () => {
  const [db, setDb] = useState({});

  // Set the variable of state to create/update a data
  const [dataToEdit, setDataToEdit] = useState(null);
  /*
    Functions to manage the table
  */
  const createData = (data) => {
    data.id = Date.now();
    console.log("Before setDb ", data);
    setDb(...db, data);
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

export default CrudApi

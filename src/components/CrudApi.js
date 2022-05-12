import React, { useState, useEffect} from 'react';
import { helpHttp } from '../helpers/helpHttp';
import CrudForm from './CrudForm';
import CrudTable from './CrudTable';
import Loader from './Loader';
import Message from './Message';



const CrudApi = () => {
  const [db, setDb] = useState(null);

  // Set the variable of state to create/update a data
  const [dataToEdit, setDataToEdit] = useState(null);

  // Set Error
  const [error, setError] = useState(null);
  // Set Message Loading
  const [loading, setLoading] = useState(false);

  // Set helper
  let api = helpHttp();
  // Set url or endpoint
  let url = 'http://localhost:5000/employee';

  // Hook to load info to db
  useEffect(() => {
    api.get(url).then((res) => {
        console.log(res);
        !res.err ? setDb(res) : setDb(null);
      });
  }, []);


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
      <article className="grid-1-2">
        <h2>MANAGE USERS - CRUD API</h2>
        <CrudForm
          createData={createData}
          updateData={updateData}
          dataToEdit={dataToEdit}
          setDataToEdit={setDataToEdit}
        />
        { loading && <Loader /> }
        { error && <Message /> }
        {db && <CrudTable
          data={db}
          setDataToEdit={setDataToEdit}
          deleteData={deleteData}
        />}
      </article>
    </div>
  );
}

export default CrudApi

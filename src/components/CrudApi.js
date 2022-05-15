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
    setLoading(true);

    helpHttp().get(url).then((res) => {
        console.log(res);
        if (!res.err) {
          setDb(res);
          setError(null);
        } else {
          setDb(null);
          setError(res);
        }
      });
    setLoading(false);
  }, [url]);


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
    console.log("Check DB ", db);
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

  // Conditional render
  // If loading variable true, so render Loader component
  // If error variable true, so render Message component
  // If db exist, so render CrudTable component
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
        { error && <Message errorMsg={`Error ${error.status}: ${error.statusText}`} bgColor="#d90000"/> }
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

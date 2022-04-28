import React from 'react'
import CrudForm from './CrudForm';

// DB initial
const initialDb = [
    {
        id: 1,
        cc: 123456789,
        name: "Lucy",
        lastname: "Fihum",
        email: "lucy.fihum@gmail.com",
        birthday: null,
        address: null,
        phone: null,
        vaccinated: null,
        infovaccine: {
            name: null, 
            date: null,
            dose: 0,
        }
    },
    {
        id: 2,
        cc: 234567890,
        name: "Peter",
        lastname: "Parker",
        email: "man.spider@gmail.com",
        birthday: null,
        address: null,
        phone: null,
        vaccinated: null,
        infovaccine: {
            name: null, 
            date: null,
            dose: 0,
        }
    },
    {
        id: 3,
        cc: 345678901,
        name: "Josh",
        lastname: "Brolin",
        email: "angry.hulk@gmail.com",
        birthday: null,
        address: null,
        phone: null,
        vaccinated: null,
        infovaccine: {
            name: null, 
            date: null,
            dose: 0,
        }
    }
]

const CrudApp = () => {
  return (
    <div>
        <h2>MANAGE USERS</h2>
        <CrudForm />
    </div>
  );
}

export default CrudApp

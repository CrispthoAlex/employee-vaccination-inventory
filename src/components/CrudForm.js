import React from 'react'
import { useFormik } from "formik";

// Employyee Vaccinate Inventory form - EminvForm
const CrudForm = () => {

  // Pass the useFormik() hook initial form values and a submit function
  // that will be called when the form is submitted
  const formik = useFormik({
    initialValues: {
      cc: '',
      name: '',
      lastname: '',
      email: '',
      birthday: '',
      address: '',
      phone: '',
      vaccinated: '',
      infovaccine: {
          name: '', 
          date: '',
          dose: '',
      }
    },
    onsubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="cc">ID number</label>
       <input
         id="cc"
         name="cc"
         type="number"
         onChange={formik.handleChange}
         value={formik.values.cc}
         placeholder="123456789"
       />

      <label htmlFor="name">Name</label>
      <input
        id="name"
        name="name"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.name}
        placeholder="Name Employee"
      />

      <label htmlFor="lastname">Lastname</label>
      <input
        id="lastname"
        name="lastname"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.lastname}
        placeholder="LastName Employee"
      />

      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
        placeholder="jhonydeeptrust@gmail.com"
      />
      
      <label htmlFor="birthday">Birthday</label>
      <input
        id="birthday"
        name="birthday"
        type="date"
        onChange={formik.handleChange}
        value={formik.values.birthday}
        placeholder="31/12/2022"
      />

      <label htmlFor="address">Home Address</label>
      <input
        id="address"
        name="address"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.address}
        placeholder="Av. July 20 Street 85 House 23"
      />

      <label htmlFor="phone">Phone</label>
      <input
        id="phone"
        name="phone"
        type="tel"
        onChange={formik.handleChange}
        value={formik.values.phone}
        placeholder="+593 678456309"
      />

      <label htmlFor="vaccinated">
        <input
          id="vaccinated"
          name="vaccinated"
          type="checkbox"
          onChange={formik.handleChange}
          value={formik.values.vaccinated}
        />
        vaccinated
      </label>
      

      <button type="submit">Submit</button>
    </form>
  );
}
/**
 * {
        id: 1,
        CC: 123456789,
        Name: "Lucy",
        LastName: "Fihum",
        Email: "lucy.fihum@gmail.com",
        Birthday: null,
        Address: null,
        Phone: null,
        vaccinated: null,
        infovaccine: {
            name: null, 
            date: null,
            dose: 0,
        }
    }
 * 
 */
export default CrudForm;

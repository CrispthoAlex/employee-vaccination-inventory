import React from 'react'
import { useFormik } from "formik";

// Employyee Vaccinate Inventory form - EminvForm
const CrudForm = () => {

  // Pass the useFormik() hook initial form values and a submit function
  // that will be called when the form is submitted
  const formik = useFormik({
    initialValues: {
      idcitizen: '',
      name: '',
      lastname: '',
      email: '',
      birthday: '2000-01-01',
      address: '',
      phone: '',
      checkvaccinated: '',
      vaccinename: '',
      vaccinedate: '2020-01-01',
      vaccinedose: '',
    },
    onsubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="idcitizen"> Citizen ID number </label>
      <input
         id="idcitizen"
         name="idcitizen"
         type="number"
         onChange={formik.handleChange}
         value={formik.values.cc}
         placeholder="123456789"
      />
      <br/>
      <label htmlFor="name"> Name </label>
      <input
        id="name"
        name="name"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.name}
        placeholder="Name Employee"
      />
      <br/>
      <label htmlFor="lastname"> Lastname </label>
      <input
        id="lastname"
        name="lastname"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.lastname}
        placeholder="LastName Employee"
      />
      <br/>
      <label htmlFor="email"> Email Address </label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
        placeholder="jhonydeeptrust@gmail.com"
      />
      <br/>
      <label htmlFor="birthday"> Birthday </label>
      <input
        id="birthday"
        name="birthday"
        type="date"
        onChange={formik.handleChange}
        value={formik.values.birthday}
        min="1950-01-01"
        max="2004-01-01"
      />
      <br/>
      <label htmlFor="address"> Home Address </label>
      <input
        id="address"
        name="address"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.address}
        placeholder="Av. July 20 Street 85 House 23"
      />
      <br/>
      <label htmlFor="phone"> Phone </label>
      <input
        id="phone"
        name="phone"
        type="tel"
        onChange={formik.handleChange}
        value={formik.values.phone}
        placeholder="+593 678456309"
      />
      <br/>
      <label htmlFor="checkvaccinated">
        <input
          id="checkvaccinated"
          name="checkvaccinated"
          type="checkbox"
          onChange={formik.handleChange}
          value={formik.values.checkvaccinated}
        />
        COVID vaccinated
      </label>
      <br/>
      
      <label htmlFor="vaccinename"> Vaccine name </label>
      <select
        id="vaccinename"
        name="vaccinename"
        typeof="text"
        onChange={formik.handleChange}
        value={formik.values.vaccinename}
      >
        <option value="Sputnik">Sputnik</option>
        <option value="AstraZeneca">AstraZeneca</option>
        <option value="Pfizer">Pfizer</option>
        <option value="Jhonson&Jhonson">Jhonson&Jhonson</option>
      </select>
      <br/>
      <label htmlFor="vaccinedate"> Vaccinated date </label>
      <input
        id="vaccinedate"
        name="vaccinedate"
        type="date"
        onChange={formik.handleChange}
        value={formik.values.vaccinedate}
        min="2020-01-01"
      />
      <br/>
      <label htmlFor="vaccinedose"> Vaccine dose </label>
      <select
        id="vaccinedose"
        name="vaccinedose"
        typeof="number"
        onChange={formik.handleChange}
        value={formik.values.vaccinedose}
      >
        <option value="dose1">1</option>
        <option value="dose2">2</option>
        <option value="dose3">3</option>
      </select>
      <br/>

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

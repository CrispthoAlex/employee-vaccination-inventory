import React from 'react'
import { useFormik } from "formik";


// A custom validation function. This must return an object
// which keys are symmetrical to our values/initialValues
const validate = values => {
  const errors = {};

  // id citizen validation
  if (!values.idcitizen) {
    errors.idcitizen = 'Required';
  } else if (values.idcitizen.toString().length < 8 ||
            values.idcitizen.toString().length > 10) {
    errors.idcitizen = 'Id citizen is not correct';
  }
  // Name validation
  if (!values.name) {
    errors.name = 'Required';
  } else if (values.name.length > 15) {
    errors.name = 'Must be 15 characters or less';
  }
  // Last Name validation
  if (!values.lastname) {
    errors.lastname = 'Required';
  } else if (values.lastname.length > 15) {
    errors.lastname = 'Must be 15 characters or less';
  }
  // Email validation
  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  // BirthDay validation
  if(!values.birthday) {
    errors.birthday = 'Required';
  }
  // Address validation
  if (!values.address) {
    errors.address = 'Required';
  } else if (values.address.length < 20) {
    errors.address = 'Must be 10 characters or more';
  }
  // Phone validation
  if (!values.phone) {
    errors.phone = 'Required';
  } else if (values.phone.toString().length < 6 ||
            values.phone.toString().length > 15) {
    errors.phone = 'length of phone is wrong';
  }
  /*
    Vaccine information validation
  */
  if (values.checkvaccinated) {
    // Vaccine Name validation
    if (!values.vaccinename) {
      errors.vaccinename = 'Required';
    }
    // Vaccine Date validation
    if (!values.vaccinedate) {
      errors.vaccinedate = 'Required';
    }
    // Vaccine Dose validation
    if (!values.vaccinedose) {
      errors.vaccinedose = 'Required';
    }
  }
  return errors;
};

// Employyee Vaccinate Inventory form
const CrudForm = () => {

  // Pass the useFormik() hook initial form values and a submit function
  // that will be called when the form is submitted
  const formik = useFormik({
    initialValues: {
      idcitizen: '',
      name: '',
      lastname: '',
      email: '',
      birthday: '',
      address: '',
      phone: '',
      checkvaccinated: '',
      vaccinename: 'Select vaccine',
      vaccinedate: '',
      vaccinedose: '',
    },
    validate,
    onsubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  /**
    Error Messsage to the user on the User form
    {formik.errors.idcitizen ? <div>{formik.errors.idcitizen}</div> : null}

    Visited fields
    formik.handleBlur: To take advantage of touched, it passes to each
    input’s onBlur prop
  */
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="idcitizen"> Citizen ID number </label>
      <input
         id="idcitizen"
         name="idcitizen"
         type="number"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.idcitizen}
         placeholder="123456789"
      />
      {formik.touched.idcitizen && formik.errors.idcitizen ? (
        <div>{formik.errors.idcitizen}</div>
      ) : null}
      <br/>
      <label htmlFor="name"> Name </label>
      <input
        id="name"
        name="name"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.name}
        placeholder="Name Employee"
      />
      {formik.touched.name && formik.errors.name ? (
        <div>{formik.errors.name}</div>
      ) : null}
      <br/>
      <label htmlFor="lastname"> Lastname </label>
      <input
        id="lastname"
        name="lastname"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.lastname}
        placeholder="LastName Employee"
      />
      {formik.touched.lastname && formik.errors.lastname ? (
        <div>{formik.errors.lastname}</div>
      ) : null}
      <br/>
      <label htmlFor="email"> Email Address </label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
        placeholder="jhonydeeptrust@gmail.com"
      />
      {formik.touched.email && formik.errors.email ? (
        <div>{formik.errors.email}</div>
      ) : null}
      <br/>
      <label htmlFor="birthday"> Birthday </label>
      <input
        id="birthday"
        name="birthday"
        type="date"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.birthday}
        min="1950-01-01"
        max="2004-01-01"
      />
      {formik.touched.birthday && formik.errors.birthday ? (
        <div>{formik.errors.birthday}</div>
      ) : null}
      <br/>
      <label htmlFor="address"> Home Address </label>
      <input
        id="address"
        name="address"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.address}
        placeholder="Av. July 20 Street 85 House 23"
      />
      {formik.touched.address && formik.errors.address ? (
        <div>{formik.errors.address}</div>
      ) : null}
      <br/>
      <label htmlFor="phone"> Phone </label>
      <input
        id="phone"
        name="phone"
        type="tel"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.phone}
        placeholder="+593 678456309"
      />
      {formik.touched.phone && formik.errors.phone ? (
        <div>{formik.errors.phone}</div>
      ) : null}
      <br/>
      <label htmlFor="checkvaccinated">
        <input
          id="checkvaccinated"
          name="checkvaccinated"
          type="checkbox"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.checkvaccinated}
        />
        COVID vaccinated
      </label>
      <br/>
      <div className='infoVaccinated' style={formik.values.checkvaccinated ?
        {display: "block"} :
        {display: "none"}
      }>

        <label htmlFor="vaccinename"> Vaccine name </label>
        <select
          id="vaccinename"
          name="vaccinename"
          typeof="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.checkvaccinated ? formik.values.vaccinename : ''}
        >
          <option value="Sputnik">Sputnik</option>
          <option value="AstraZeneca">AstraZeneca</option>
          <option value="Pfizer">Pfizer</option>
          <option value="Jhonson&Jhonson">Jhonson&Jhonson</option>
        </select>
        {formik.touched.vaccinename && formik.errors.vaccinename ? (
          <div>{formik.errors.vaccinename}</div>
        ) : null}
        <br/>
        <label htmlFor="vaccinedate"> Vaccinated date </label>
        <input
          id="vaccinedate"
          name="vaccinedate"
          type="date"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.checkvaccinated ? formik.values.vaccinedate : ''}
          min="2020-01-01"
        />
        {formik.touched.vaccinedate && formik.errors.vaccinedate ? (
          <div>{formik.errors.vaccinedate}</div>
        ) : null}
        <br/>
        <label htmlFor="vaccinedose"> Vaccine dose </label>
        <select
          id="vaccinedose"
          name="vaccinedose"
          typeof="number"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.checkvaccinated ? formik.values.vaccinedose : ''}
        >
          <option value="dose1">1</option>
          <option value="dose2">2</option>
          <option value="dose3">3</option>
        </select>
        {formik.touched.vaccinedose && formik.errors.vaccinedose ? (
          <div>{formik.errors.vaccinedose}</div>
        ) : null}
      </div>
      <br/>

      <button type="submit">Submit</button>
    </form>
  );
}


export default CrudForm;

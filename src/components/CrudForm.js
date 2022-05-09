import React from 'react'
import { Formik } from "formik";
import * as Yup from 'yup';


// Empty user
const initialValues = {
  id: null,
  idcitizen: '',
  name: '',
  lastname: '',
  email: '',
  birthday: '',
  address: '',
  phone: '',
  checkvaccinated: '',
  vaccinename: '',
  vaccinedate: '',
  vaccinedose: '',
};

// Employyee Vaccinate Inventory form
const CrudForm = ({createData, updateData, dataToEdit, setDataToEdit}) => {


  /**
   * Pass the useFormik() hook initial form values and a submit function
   * that will be called when the form is submitted

   * Schema Validation with Yup library was configured
  -------------------------------------------------------------------------
   Error Messsage to the user on the User form
   {formik.errors.idcitizen ? <div>{formik.errors.idcitizen}</div> : null}

   Visited fields
   formik.handleBlur: To take advantage of touched, it passes to each
   input’s onBlur prop

   Reducing BoilerPlate
   formik.getFieldProps() helper method makes it faster to wire up inputs

   Swap useFormik() hook to <Formik> component/render-prop
   convert the object passed to useFormik() to JSX, with each key becoming
   a prop
   
   */
  
  return (
    <Formik
      initialValues= {initialValues}
      validationSchema= {Yup.object({
          idcitizen: Yup.number()
            .max(10000000000, 'Id citizen is not correct')
            .required('Required'),
          name: Yup.string()
            .max(20, 'Must be 15 characters or less')
            .required('Required'),
          lastname: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('Required'),
          email: Yup.string().email('Invalid email address')
            .required('Required'),
          birthday: Yup.date()
            .max('2004-01-01')
            .required('Required'),
          address: Yup.string()
            .min(20, 'Must be 20 characters or more')
            .required('Required'),
          phone: Yup.string()
            .min(6, 'Length of phone is wrong')
            .required('Required'),
      })}
      handleSubmit={ (values, {setSubmitting}) => {
        // CHECK
        console.log('Works???');
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
          // Create or Update user from Submit
          values.id === null ? createData(values) : updateData(values);

          console.log("Check Submit",values);
        }, 500);

      }}
      onClick={ () => {
        setDataToEdit(null);
      }}
    >
      {formik => (
        <form onSubmit={formik.handleSubmit}
          // Mode User infor Edit on Manage Users Page
          onChange= {() => {
            dataToEdit ? formik.values = dataToEdit :
              formik.values = initialValues;
          }}
        >
          <h2>{dataToEdit ? "Edit" : "Adding"}</h2>
          <label htmlFor="idcitizen"> Citizen ID number </label>
          <input
            id="idcitizen"
            name="idcitizen"
            type="number"
            {...formik.getFieldProps('idcitizen')}
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
            {...formik.getFieldProps('name')}
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
            {...formik.getFieldProps('lastname')}
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
            {...formik.getFieldProps('email')}
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
            {...formik.getFieldProps('birthday')}
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
            {...formik.getFieldProps('address')}
            placeholder="Av. July 20 Street 85 House 23"
          />
          {formik.touched.address && formik.errors.address ? (
            <div>{formik.errors.address}</div>
          ) : null}
          <br/>
          <label htmlFor="phone"> Phone (+)</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            {...formik.getFieldProps('phone')}
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
              {...formik.getFieldProps('checkvaccinated')}
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
              value={formik.values.checkvaccinated ? formik.values.vaccinedate :
                      '' }
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
              <option value="dose 1"> 1 </option>
              <option value="dose 2"> 2 </option>
              <option value="dose 3"> 3 </option>
            </select>
            {formik.touched.vaccinedose && formik.errors.vaccinedose ? (
              <div>{formik.errors.vaccinedose}</div>
            ) : null}
          </div>
          <br/>

          <button type="submit" disabled={formik.isSubmitting} >Submit</button>
          <button type="reset" onClick={formik.handleReset}>Reset</button>

        </form>
      )}
      </Formik>
  );
};

export default CrudForm;

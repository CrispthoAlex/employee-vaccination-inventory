# EMPLOYEE VACCINATED INVENTORY - REACTjs

## **Description**
This project is about a application to record of the Employee vaccinated state. It was developed with [Formik](https://formik.org/) that includes views for listing, adding, editing and deleting records from a JSON server (fake API).

## **Project Structure**

* src

    * components
        
        * [CrudApp.js](./src/components/CrudApp.js)
        * [CrudForm.js](./src/components/CrudForm.js)
        * [CrudTable.js](./src/components/CrudTable.js)
        * [CrudTableRow.js](./src/components/CrudTableRow.js)
    * [App.js](./src/App.js)
    * [index.js](./src/index.js)
    * [index.css](./src/index.css)
* public
    
    * [index.html](./public/index.html)
* [package.json](package.json)
* [README.md](README.md)

## **Views**
### + Registry form
The validations of the inputs were evaluate with [Yup library](https://www.npmjs.com/package/yup)
<img width=450px src='./public/images/registryview.JPG'>
<br>

### + Employee table
<img width=600px height='auto' src='./public/images/employeetable.JPG'>
<br><br>

### **Deployment**

Clone this repo and follow this option to manage the Data Base fake.

#### **_On your local Machine_**
To deploy on your local machine, go to the dir:

**CLI:**

````
    npm start

````

_Note:_ To star npm (npx) you should install it

To Manage the DataBase on your local machine use this command:

**CLI:**

````
    npm run json-server --watch src/api/db.json --port 5000
````

#### **_View on the web_**

https://crispthoalex.github.io/employee-vaccination-inventory/

#### **Follow me** 💬

| **Authors** | **GitHub** | **Twitter** | **Linkedin** |
| :---: | :---: | :---: | :---: |
| Crispthofer Rincon | [crispthoalex](https://github.com/crispthoalex) | [@crispthoalex](https://twitter.com/crispthoalex) | [carmurrain](https://www.linkedin.com/in/carmurrain) |



##### April, 2022. Colombia
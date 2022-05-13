# EMPLOYEE VACCINATED INVENTORY - REACTjs

## **Description**
This project is about a application to record of the Employee vaccinated state. It was developed with [Formik](https://formik.org/) that includes views for listing, adding, editing and deleting records from a JSON server (fake API).

## **Project Structure**

* public
    
    * [index.html](./public/index.html)
    * [manifest.json](./public/manifest.json)
    * [robots.txt](./public/robots.txt)
* src

    * api

        * [db.json](./src/api/db.json)
    * components
        
        * [CrudApi.js](./src/components/CrudApi.js) 
        * [CrudApp.js](./src/components/CrudApp.js)
        * [CrudForm.js](./src/components/CrudForm.js)
        * [CrudTable.js](./src/components/CrudTable.js)
        * [CrudTableRow.js](./src/components/CrudTableRow.js)
        * [Loader.css](./src/components/Loader.css)
        * [Loader.js](./src/components/Loader.js)
        * [Message.js](./src/components/Message.js)
    * helpers
        * [helpHttp.js](./src/helpers/helpHttp.js)
    * [App.js](./src/App.js)
    * [index.js](./src/index.js)
    * [index.css](./src/index.css)
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
Or,

````
    npm run fake-api
````
_Note: fake-api script in [package.json file](./package.json)_

<br>

#### **_View on the web_**

https://crispthoalex.github.io/employee-vaccination-inventory/

#### **Follow me** 💬

| **Authors** | **GitHub** | **Twitter** | **Linkedin** |
| :---: | :---: | :---: | :---: |
| Crispthofer Rincon | [crispthoalex](https://github.com/crispthoalex) | [@crispthoalex](https://twitter.com/crispthoalex) | [carmurrain](https://www.linkedin.com/in/carmurrain) |



##### April, 2022. Colombia

# CRUD APP 🔥{Create✒, Read📖, Update📝, Delete🗑} 
👇👇 By Using
## React.js❄, Node.js✨, Express⚡, MySQL🌟, REST API's🚀🚀 
### 🚀 REST (Representational State Transfer) 
    REST is an architectural style that defines a set of constraints to be used for creating web services.
### ⚡ API (Application programming Interface)
    A software intermediary that allows two applications to communicate and work with each other.
    APIs are like messengers that let apps talk to each other, sharing data and features to create seamless experiences.
### 🏁 JSON (javaScript Object Notation)
    It is a lightweight, open data interchange format that is both human and machine-readable. 
    JSON is often used when data is sent from a server to a web page. 
## CRUD Operation's
 * **GET :** retrieve resources.
 * **POST :** submit new data to the server.
 * **PUT :** update existing data.
 * **PATCH :** update existing data partially.
 * **DELETE :** removes data.
## Creating 🚀 RESTful API's and 🎇 SQL query

### 1. **GET** {Index 🏡}
   - **get"/" :** index or home page (get all data from database to front-page)
     - **sql** : "SELECT * FROM TABLE_NAME"
      
![home2](https://github.com/Mukesh-Choudhary-123/CRUD_APP/assets/118448246/00a5d3d5-6c81-4dfc-805c-88437af68e8f)

### 2. **POST** {Create✒}
   - **post"/user" :** to add a new data in database.
     - **sql** : INSERT INTO table_name (column1, column2, ..., columnN) <br>
                   &nbsp; &nbsp; &nbsp; &nbsp; VALUES (value1, value2, ..., valueN);
       
![Create API](https://github.com/Mukesh-Choudhary-123/CRUD_APP/assets/118448246/4e36d6af-06ec-4c8a-987b-4ad18ddeccfd)

### 3. **GET** {Read📖}
   - **get"/read/:id" :** to read single data.
     - **sql** : SELECT column_name <br>
                  &nbsp; &nbsp; &nbsp; &nbsp;FROM table_name <br>
                  &nbsp; &nbsp; &nbsp; &nbsp;WHERE condition;
       
![Read API](https://github.com/Mukesh-Choudhary-123/CRUD_APP/assets/118448246/d5e055d4-66b4-4b9b-bf20-592811988c45)

### 4. **PUT** {Update📝}
   - **put"/update/:id" :** to update specific data.
     - **sql** : UPDATE table_name<br>
&nbsp; &nbsp; &nbsp; &nbsp; SET column_name = new_value<br>
&nbsp; &nbsp; &nbsp; &nbsp; WHERE condition;

![Update API ](https://github.com/Mukesh-Choudhary-123/CRUD_APP/assets/118448246/4ab2b7c8-efc9-44eb-882d-7b91f45568e9)

### 5. **DELETE** {Delete🗑}
   - **delete"/delete/:id" :** to delete specific data.
     - **sql** : DELETE FROM table_name <br>
&nbsp; &nbsp; &nbsp; &nbsp; WHERE condition;

![Delete API](https://github.com/Mukesh-Choudhary-123/CRUD_APP/assets/118448246/a091ca15-6fed-49a9-a251-e7d05ffde2b1)


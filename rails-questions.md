# ASSESSMENT 5: Database and Active Record Practical Questions

1. What is SQL?
Standard Query Language, it is the used language for relational database management, the language can update retrieve information from a data base.


2. What the PostgreSQL query that would return all the content in a particular table? 
Select *


3. What is the command to create a new Rails application with a PostgreSQL database?
in the command console rails new INSERT-APP-NAME -d postgresql -T


4. What is the command to generate a Rails model for a meals table with columns named breakfast, lunch, and dinner?
in the command console rails generate model Meals breakfast:string lunch:string dinner:string

5. What is a migration? Why would you use one?
migration takes place when a developer update or creates new data on a table. migration is a file that is made and pushed to the schema.

6. What is the command to generate a migration file?
rails db:migrate

7. What is the naming convention for generating a Rails model? What is the naming convention for the table that is generated with this command?
to generate a rails model it will be
 **Table column:data type**

8. What is the schema file in a Rails application? Can you modify the schema directly? Why or why not?
schema is what organizes the database, no you cannot modify it directly only by migrating in a specific file

9. What is the Rails console?
rails has its own built in console to interact with a database, and apply crud

10. What is the Rails console command to see all the content in a particular table?
.all will show the entire databse of a Table
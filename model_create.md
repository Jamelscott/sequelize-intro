
## model/table to hold users

`sequelize model:create --name user --attributes firstName:string, lastName:string, age:integer, email:string`

## model/table to hold pets

`sequelize model:create --name pet --attributes name:string, description:text, userId:integer

<!-- Sequelize understands the camelcase of userId and it's relateionship to the user table -->
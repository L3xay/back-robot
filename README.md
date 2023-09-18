# Robot Backend

## Description
This is the backend that will be supporting the frontend robot manger data


## Setup

1. install dependencies:
```bash
$ npm install express mysql2 sequelize cors
```
2. Setup Sequelize:
```bash
$ npx sequelize-cli init
```
3. Start server
```bash
$ npm start
```
4. Run the migration
```bash
$ npx sequelize-cli db:migrate
```
5. Run the seeder
```bash
$ npx sequelize-cli db:seed:all
```

## Note
At this point the node serve should be up and working with a DB including
a table name "Robots" that contains 10 robots to start with.
- Please make sure that the port 3000 is not in use by another app before running the server.
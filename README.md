# DataBASED
## Library Management System

### Setup
Install MySQL

To initialize the database:
1. Switch into the `database` directory.
2. Start an admin MySQL shell with the `--local-infile=1` flag.
3. Execute `source create.sql` to create the database and tables.
4. Execute `set global local_infile=1;` to enable loading data from files.
5. Execute `source load.sql` to load the data into the tables.
6. Create an account with permissions to SELECT, INSERT, UPDATE, and DELETE.
7. Exit the shell, and switch into the `backend` directory.
8. Rename the `.env.template` file to `.env`, and fill the appropriate fields with the account info.

Install Node.js (https://nodejs.org/en/download)

To install dependencies for the project:
1. Switch into the `ui` directory and execute `npm install`
2. Switch into the `backend` directory and execute `npm install`

### Usage
Build the frontend:
1. Switch into the `ui` directory
2. Execute `npm run build`

Start the sever:


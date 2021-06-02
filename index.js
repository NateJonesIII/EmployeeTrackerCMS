//Dependencies 
const mysql = require("mysql");
const inquirer = require("inquirer");
const figlet = require("figlet");
const queries = require("./queries");
const PORT = 3000;
//MySQL db connection
const connection = mysql.createConnection({
    host: "localhost",
    port: PORT,
    user: "root",
    password: "Xootydew45!!",
    database: "cms_DB"
});

//Connection to DB cms_DB
connection.connect((error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Server running on port: " + PORT);
        //Inquirer Main Menu

    }
});

const confirmAnswerValidator = async (input) => {
    if (input !== 'y' || input !== 'n') {
        return 'Incorrect asnwer';
    }
    return true;
};

//main menu function 
const mainMenu = () => {
    inquirer.prompt({
        name: "mainMenu",
        type: "list",
        message: "Please select an option",
        choices: queries.mainMenu
    }).then((answer) => {
        if (answer.mainMenu == "Add new department, role, or employee") {
            console.log(`\n ${answer.add} selected \n`);
            addMenu();
        }
        else if (answer.mainMenu == "View department, role, or employee") {
            console.log(`\n ${answer.add} selected \n`);
            viewMenu();
        }
        else if (answer.mainMenu == "Update employee role") {
            console.log(`\n ${answer.add} selected \n`);
            updateMenu();
        }
        else if (answer.mainMenu == "Exit") {
            console.log(`${answer.mainMenu} selected exiting program`);
            connection.end();
        }
        else {
            console.log("Exiting program");
        }
    })//end of then statement
};//End of mainMenu statement

//This function handles adding new data to the DB
const addMenu = () => {
    inquirer.prompt({
        name: "add",
        type: "list",
        message: "What data would you like to enter?",
        choices: queries.addOpt
    }).then((answer) => {
        if (answer.add == "Department") {
            console.log(`\n ${answer.add} selected \n`);
            addDepartment();
        }
        else if (answer.add == "Role") {
            console.log(`\n ${answer.add} selected \n`);
            addRole();
        }
        else if (answer.add == "Employee") {
            console.log(`\n ${answer.add} selected \n`);
            addEmployee();
        }
        else if (answer.add == "Return to Main Menu") {
            console.log(`\n ${answer.add} selected \n`);
            mainMenu();
        }
        else if (answer.add == "Exit") {
            console.log(`${answer.mainMenu} selected exiting program`);
            connection.end();
        }
        else {
            console.log("Exiting program");
        }
    }); //End of then statement
};// End of add function 

const viewMenu = () => {
    inquirer.prompt({
        name: "view",
        type: "list",
        message: "What data would you like to view?",
        choices: queries.viewOpt
    }).then((answer) => {
        if (answer.view == "All Employees") {
            console.log(`\n ${answer.add} selected \n`);
            viewEmployees();
        }
        else if (answer.view == "All Roles") {
            console.log(`\n ${answer.add} selected \n`);
            allRoles();
        }
        else if (answer.view == "All Departments") {
            console.log(`\n ${answer.add} selected \n`);
            allDepartments();
        }
        else if (answer.view == "Return to Main Menu") {
            console.log(`\n ${answer.add} selected \n`);
            mainMenu();
        }
        else if (answer.view == "Exit") {
            console.log(`${answer.mainMenu} selected exiting program`);
            connection.end();
        }
        else {
            console.log("Exiting program");
        }
    }); //End of then statement
};//End of view statement 

//Function for updating existing data
const updateMenu = () => {
    inquirer.prompt({
        name: "update",
        type: "list",
        message: "What data would you like to view?",
        choices: queries.updateOpt
    }).then((answer) => {
        if (answer.update == "All Employees") {
            console.log(`\n ${answer.add} selected \n`);
            updateEmployees();
        }
        else if (answer.update == "All Roles") {
            console.log(`\n ${answer.add} selected \n`);
            updateRoles();
        }
        else if (answer.update == "All Departments") {
            console.log(`\n ${answer.add} selected \n`);
            updateDepartments();
        }
        else if (answer.update == "Return to Main Menu") {
            console.log(`\n ${answer.add} selected \n`);
            mainMenu();
        }
        else if (answer.update == "Exit") {
            console.log(`${answer.mainMenu} selected exiting program`);
            connection.end();
        }
        else {
            console.log("Exiting program");
        }
    }); //End of then statement
};//End of updateMenu statement

//Add Department function
const addDepartment = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'department',
            message: "Please insert the department name"
        }
    ])
        .then((answer) => {
            db.query("INSERT INTO department SET ?", { dept_name: `${answer.department}` }, (err, res) => {
                if (err)
                    throw (err);

                console.log(`You have inserted the ${answer.addDepartment} department to the database.`);

                mainMenu();
            }); //End of query
        });
};//End of addDepartment function

const addRole = () => {


};//End of addRole function
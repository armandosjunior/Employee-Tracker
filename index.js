//Inquier connection
const inquirer = require('inquirer');
const mysql = require('mysql2');
const cTable = require('console.table');

// Connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: 'root',
      database: 'employment_db'
    },
    console.log(`Now connected to employee_db database.`)
)

db.connect(err => {
    if (err) throw err
    init();
})

const init = () => {
    inquirer.prompt({

        type: "list",
        name: "answers",
        message: "Select one of the following.",
        choices: ["view all departments", "view all roles", "view all employees", "add a department", "add a role", "add employee", "update an employee role", "done"]
    })

    .then((answer) => {
        switch (answer.answers) {

            case "view all departments": console.log("view all departments")
                viewDepartments();
                break;

            case "view all roles": console.log("view all roles")
                viewRoles();
                break;

            case "view all employes": console.log("view all employees")
                viewEmployees();
                break;

            case "add a department": console.log("add a department")
                addDepartment();
                break;

            case "add a role": console.log("view a role")
                addRole();
                break;
            
            case "add an employee": console.log("view an employee")
                addEmployee();
                break;
            
            case "update employment role": console.log("update employment role")
                updateRole();
                break;
            
            case "done": console.log("done")
                done();
                break;

        }
})

};

//all viewing functions
const viewDepartments = () => {
    db.query('SELECT * FROM department', (err, res) => {
        if (err) throw err;
        console.table(res);
        init();
    });
}

const viewRoles = () => {
    db.query('SELECT * FROM roles', (err, res) => {
        if (err) throw err;
        console.table(res);
        init();
    });
}

const viewEmployees = () => {
    db.query('SELECT * FROM employee', (err, res) => {
        if (err) throw err;
        console.table(res);
        init();
    });
}

//all adding functions (department)
addDepartment = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "addDepartment",
            message: "Insert name of new department",
            validate: (name) => {
                if (name) {
                    return true; }
                        else {
                            console.log("insert department")
                        }
            }     
        }
    ]) 
        .then(answer => {
            const query = "INSERT INTO department (name) VALUES (?)";
            db.query(query, answer.department, (err, res) => {
                if (err) throw err;
                console.log("department was added!")
                init();
            });
        });
}

//all adding functions (roles)
addRole = () => {

    return inquirer.prompt([
        {
            type: "input",
            name: "role",
            message: "Insert the role of employee",
            validate: (name) => {
                if (name) {
                    return true; }
                        else {
                            console.log("Insert role of employee!")
                            return false;
                        }
                
            }     
        },
        {
            type: "input",
            name: "salary",
            message: "Insert the salary of employee",
            validate: (name) => {
                if (name) {
                    return true; }
                        else {
                            console.log("Insert salary of employee!")
                            return false;
                        }
                
            }     
        },
        {
            type: "select",
            name: "department",
            message: "Choose the department of employee's role",
            choices: ["Engineering", "Finance", "Sales", "Legal"]
        }

    ])
}

//all adding functions ()
addEmployee = () => {

    return inquirer.prompt([
        {
            type: "input",
            name: "employeeFirst",
            message: "Insert employee first name.",
            validate: (name) => {
                if (name) {
                    return true; }
                        else {
                            console.log("Insert employee first name!")
                            return false;
                        }
                
            }     
        },
        {
            type: "input",
            name: "employeeLast",
            message: "Insert employee last name.",
            validate: (name) => {
                if (name) {
                    return true; }
                        else {
                            console.log("Insert employee last name!")
                            return false;
                        }
                
            }     
        },
        {
            type: "select",
            name: "employeeRole",
            message: "Choose employment role.",
            choices: ["Engineering", "Finance", "Sales", "Legal"]  
        },
        {
            type: "input",
            name: "employeeManager",
            message: "Insert employee's manager.",
            validate: (name) => {
                if (name) {
                    return true; }
                        else {
                            console.log("Insert employee's manager")
                            return false;
                        }
            }     
        },
    ])
};


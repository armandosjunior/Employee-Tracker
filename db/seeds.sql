INSERT INTO department (name)
VALUES ("Engineering"),
       ("Finance"),
       ("Sales"),
       ("Legal");

INSERT INTO roles (title, salary, department_id)
VALUES ("Sales Lead", 100000, 1),
       ("Sales Person", 85000, 2),
       ("Lead Engingeer", 150000, 3),
       ("Software Engineer", 120000, 4),
       ("Account Manager", 160000, 5),
       ("Account Manager", 115000, 6),
       ("Lawyer", 120000, 7);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("John", "Gonzales", 1, 1),
       ("Tom", "Ford", 2, 2),
       ("Karen", "Wilson", 3, 3),
       ("Kevin", "Adams", 4, 4),
       ("Armando", "Sida", 5, 5),
       ("Jazmin", "Martinez", 6, 6),
       ("Judith", "DeSantiago", 7, 7);

DROP DATABASE IF EXISTS cms_DB;
CREATE DATABASE cms_DB;
USE cms_DB;
CREATE TABLE employee(
  emp_id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30) NULL,
  last_name VARCHAR(30) NULL,
  role_id INT NULL,
  manager_id INT NULL,
  PRIMARY KEY (emp_id)
);
CREATE TABLE role(
  role_id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(30) NULL,
  salary DECIMAL(8, 2) NULL,
  dept_id INT NULL,
  PRIMARY KEY (role_id)
);
CREATE TABLE department(
  dept_id INT NOT NULL AUTO_INCREMENT,
  dept_name VARCHAR(30) NULL,
  PRIMARY KEY (id)
);
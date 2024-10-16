create table users (
	ID int  PRIMARY KEY ,
	username varchar(100),
	useremail varchar(100),
	password varchar(100) );

INSERT INTO users( ID, username , useremail , password ) VALUES
	('1','Timmy','timmy12@gmail.com','1234'),
	('2','kate','kate23@gmail.com','2345');

SELECT * FROM users;

UPDATE users
	SET username='Jane' , useremail='jane12@gmail.com'
	where ID=1;


INSERT INTO users( ID, username , useremail , password ) VALUES
('3','kateuy','katedd23@gmail.com','23r45');
SELECT * FROM users;

DELETE FROM users where ID=1;

SELECT * FROM users;

CREATE table employers (
employee_id int PRIMARY KEY,
employee_name varchar(100),
city varchar(100),
designation varchar(100),
salary decimal(10) );


INSERT INTO employers(employee_id, employee_name ,city , designation, salary ) VALUES
('1','Timmy',' Bangalore','Marketing Specialist','30000'),
('2','jane','kochi','Marketing Specialist','25000'),
('3','will','kochi','HR','35000');

select * from employers;

SELECT MAX(salary) AS second_heighest FROM employers
where salary < (select MAX(salary) from employers);

select distinct designation from employers;

SELECT * FROM employers
ORDER BY employee_name DESC;

SELECT * FROM employers
WHERE designation = 'Marketing Specialist' AND salary < '35000';


SELECT * FROM employers
WHERE city = 'Banglore' OR city = 'kochi';

SELECT * FROM employers
ORDER BY city DESC;

SELECT TOP 2 * FROM employers;

SELECT COUNT(employee_name)
FROM employers;

SELECT SUM(salary)
FROM employers;

SELECT AVG(salary)
FROM employers;

SELECT * FROM employers
WHERE designation LIKE 'm%';

INSERT INTO employers(employee_id, employee_name ,city , designation, salary ) VALUES
('4','james','mumbai','Associate','20000');

DELETE FROM employers where employee_id=4;

SELECT * FROM employers
WHERE city IN ('kochi', 'mumbai');

SELECT * FROM employers
WHERE salary BETWEEN 20000 AND 30000;

CREATE table cricket (
cricket_id INT IDENTITY(1,1) PRIMARY KEY,
name varchar(10) );

insert into cricket (name) values
('kate'),('james'),('will'),('jane'),('blue');

CREATE table football (
football_id INT IDENTITY(1,1) PRIMARY KEY,
name varchar(10) );

insert into football (name) values
('will'),('blue'),('happy'),('june'),('scott');

select * from cricket;

insert into football (name) values
('jean'),('jack'),('mike'),('sun'),('harly');


select * from cricket 
inner join football on cricket.name = football.name;

SELECT cricket.name, employers.employee_id, employers.designation
FROM cricket
LEFT JOIN employers
ON cricket.name=employers.employee_name;

SELECT cricket.name, employers.employee_id, employers.designation
FROM cricket
Right JOIN employers
ON cricket.name=employers.employee_name;

SELECT cricket.name, employers.employee_id, employers.designation
FROM cricket
FULL OUTER JOIN employers
ON cricket.name=employers.employee_name;

SELECT cricket.name, football.name
FROM cricket, football;

create index cricket_name_idx
on cricket(name);

select COUNT(*)
from cricket
where name='kate';

CREATE TABLE Orders (
    OrderID INT PRIMARY KEY,
    CustomerID INT,
    OrderAmount DECIMAL(10, 2),
    OrderDate DATE
);

INSERT INTO Orders (OrderID, CustomerID, OrderAmount, OrderDate)
VALUES
	(1, 101, 500, '2023-01-10'),
	(2, 102, 1000, '2023-01-15'),
	(3, 101, 200, '2023-02-20'),
	(4, 103, 1500, '2023-03-25'),
	(5, 102, 700, '2023-04-01');

select * from Orders;

SELECT CustomerID, SUM(OrderAmount) AS Total
FROM Orders
	GROUP BY CustomerID
	HAVING SUM(OrderAmount) > 1000;

SELECT CustomerID, SUM(OrderAmount) AS Total
FROM Orders
GROUP BY CustomerID;

SELECT CustomerID, SUM(OrderAmount) AS Total
FROM Orders
GROUP BY CustomerID
HAVING SUM(OrderAmount) > 1000 AND SUM(OrderAmount) < 2000;

CREATE TABLE Employee (
    EmployeeID INT PRIMARY KEY, 
    FirstName NVARCHAR(50),
    LastName NVARCHAR(50),
    Department NVARCHAR(50),
    Salary DECIMAL(10, 2)
);

INSERT INTO Employee (EmployeeID, FirstName, LastName, Department, Salary)
VALUES 
    (1, 'John', 'Doe', 'HR', 50000.00),
    (2, 'Jane', 'Smith', 'Finance', 60000.00),
    (3, 'Alex', 'Johnson', 'IT', 55000.00),
    (4, 'Emily', 'Davis', 'Marketing', 58000.00),
    (5, 'Chris', 'Brown', 'HR', 52000.00);

select * from Employee;

CREATE NONCLUSTERED INDEX IDX_LastName
ON Employee (LastName);

SELECT * FROM Employee WHERE EmployeeID = 3;
SELECT * FROM Employee WHERE LastName = 'Smith';

EXEC sp_helpindex 'Employee';

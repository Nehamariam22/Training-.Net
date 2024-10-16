use claysys;

create table customers (
ID INT IDENTITY(1,1) PRIMARY KEY,
username varchar(100),
password varchar(100) );

INSERT INTO customers(  username ,  password ) VALUES
('Geethu','1234'),
('Hopper','1234'),
('jane','1234'),
('kate','2345');

create procedure uspCustomer_login(
@username varchar(100),
@password varchar(100))
AS
INSERT into customers (username,password) values(@username,@password)   --insert operation

EXEC uspCustomer_login 'ammu','1234'                    -- insert values

select * from customers;

CREATE PROCEDURE usp_GetAllUsers  
AS
BEGIN
    SELECT * FROM customers;
END;                                          -- select


CREATE PROCEDURE usp_UpdateUser
	@id int,
    @new_username VARCHAR(100),
    @new_password VARCHAR(255)
AS
    UPDATE customers
    SET username = @new_username,
        password = @new_password
    WHERE id = @id;                          -- update


EXEC usp_UpdateUser  3, 'Fox','8906';         --update values



CREATE PROCEDURE sp_DeleteUser
    @id INT
AS
    DELETE FROM customers
    WHERE id = @id;
    
    SELECT 'User deleted successfully' AS message;      --delete

EXEC sp_DeleteUser @id = 2;                             -- delete value


create table students (
id INT IDENTITY(1,1) PRIMARY KEY,
name VARCHAR(100) NULL,   
dateofbirth DATE  NULL,     
address NVARCHAR(255) NULL);


INSERT INTO students( name ,dateofbirth, address ) VALUES
('Geethu','2005-08-20','India'),
('Hopper','2006-02-16','Abc'),
('jane','2004-10-22','ooty'),
('kate','2005-08-01','qwert');

select * from students;

CREATE PROCEDURE sp_StudentAdmission 
@Type VARCHAR(10),         
@id INT = NULL,      
@name VARCHAR(100) = NULL,  
@dateofbirth DATE = NULL,    
@address VARCHAR(255) = NULL
AS
BEGIN
    -- INSERT Operation
    IF @Type = 'INSERT'
    BEGIN
        INSERT INTO students (name,dateofbirth, address)
        VALUES (@name, @dateofbirth, @address);
    END;
	IF @Type = 'SELECT'
    BEGIN
  
        IF @id IS NOT NULL
        BEGIN
            SELECT * FROM students WHERE id = @id;
        END
        ELSE
        BEGIN
            SELECT * FROM students;
        END
    END;
	IF @Type = 'UPDATE'
    BEGIN
        UPDATE students
        SET name = @name, dateofbirth = @dateofbirth, address = @address
        WHERE id = @id;
    END;
	 IF @Type = 'DELETE'
    BEGIN
        DELETE FROM students
        WHERE id = @id;
    END;
END;

EXEC sp_StudentAdmission
    @Type = 'INSERT',
    @name = 'John',
    @dateofbirth = '2005-04-19',
    @address = 'August';

EXEC sp_StudentAdmission
    @Type = 'SELECT';

EXEC sp_StudentAdmission
    @Type = 'SELECT',
    @id = 1;

EXEC sp_StudentAdmission
    @Type = 'UPDATE',
    @id= 3,
    @name = 'steve',
    @dateofbirth = '2000-7-14',
    @address = 'Marvel';


EXEC sp_StudentAdmission
    @Type = 'DELETE',
    @id = 4;








    
   




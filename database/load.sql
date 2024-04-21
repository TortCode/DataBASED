USE lms;

DELETE FROM loan;
DELETE FROM owns;
DELETE FROM checks_out;
DELETE FROM user_has_phone_no;
DELETE FROM publisher_has_phone_no;
DELETE FROM library_has_phone_no;
DELETE FROM publication;
DELETE FROM library;
DELETE FROM author;
DELETE FROM library_system;
DELETE FROM publisher;
DELETE FROM user;
DELETE FROM member;

LOAD DATA LOCAL INFILE 'C:\\Users\\Vikas\\Downloads\\SQLProject\\author.csv'
INTO TABLE author
FIELDS TERMINATED BY ','
LINES TERMINATED BY '\n';

LOAD DATA LOCAL INFILE 'C:\\Users\\Vikas\\Downloads\\SQLProject\\library_system.csv'
INTO TABLE library_system
FIELDS TERMINATED BY ','
LINES TERMINATED BY '\n';

LOAD DATA LOCAL INFILE 'C:\\Users\\Vikas\\Downloads\\SQLProject\\library.csv'
INTO TABLE library
FIELDS TERMINATED BY ','
LINES TERMINATED BY '\n';

LOAD DATA LOCAL INFILE 'C:\\Users\\Vikas\\Downloads\\SQLProject\\publisher.csv'
INTO TABLE publisher
FIELDS TERMINATED BY ','
LINES TERMINATED BY '\n';

LOAD DATA LOCAL INFILE 'C:\\Users\\Vikas\\Downloads\\SQLProject\\user.csv'
INTO TABLE user
FIELDS TERMINATED BY ','
LINES TERMINATED BY '\n';

LOAD DATA LOCAL INFILE 'C:\\Users\\Vikas\\Downloads\\SQLProject\\publication.csv'
INTO TABLE publication
FIELDS TERMINATED BY ','
LINES TERMINATED BY '\n';

LOAD DATA LOCAL INFILE 'C:\\Users\\Vikas\\Downloads\\SQLProject\\member.csv'
INTO TABLE member
FIELDS TERMINATED BY ','
LINES TERMINATED BY '\n';

LOAD DATA LOCAL INFILE 'C:\\Users\\Vikas\\Downloads\\SQLProject\\loan.csv'
INTO TABLE loan
FIELDS TERMINATED BY ','
LINES TERMINATED BY '\n';

LOAD DATA LOCAL INFILE 'C:\\Users\\Vikas\\Downloads\\SQLProject\\owns.csv'
INTO TABLE owns
FIELDS TERMINATED BY ','
LINES TERMINATED BY '\n';

LOAD DATA LOCAL INFILE 'C:\\Users\\Vikas\\Downloads\\SQLProject\\checks_out.csv'
INTO TABLE checks_out
FIELDS TERMINATED BY ','
LINES TERMINATED BY '\n';

LOAD DATA LOCAL INFILE 'C:\\Users\\Vikas\\Downloads\\SQLProject\\user_has_phone_no.csv'
INTO TABLE user_has_phone_no
FIELDS TERMINATED BY ','
LINES TERMINATED BY '\n';

LOAD DATA LOCAL INFILE 'C:\\Users\\Vikas\\Downloads\\SQLProject\\publisher_has_phone_no.csv'
INTO TABLE publisher_has_phone_no
FIELDS TERMINATED BY ','
LINES TERMINATED BY '\n';

LOAD DATA LOCAL INFILE 'C:\\Users\\Vikas\\Downloads\\SQLProject\\library_has_phone_no.csv'
INTO TABLE library_has_phone_no
FIELDS TERMINATED BY ','
LINES TERMINATED BY '\n';
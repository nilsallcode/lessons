/* Create users table */
CREATE TABLE Users (
	id int,
  name varchar(256),
  email varchar(1000)
);

/* Create users */
INSERT INTO Users (id, name, email) VALUES (1, 'Bob', 'bob@gmail.com');
INSERT INTO Users (id, name, email) VALUES (2, 'Mary', 'mary@gmail.com');
INSERT INTO Users (id, name, email) VALUES (3, 'Taylor', 'taylor@gmail.com');

/* Get all users */
SELECT * FROM Users;

/* Get specific user by id */
SELECT * FROM Users WHERE id=2;

/* Create Posts Table */
CREATE TABLE Posts (
	id int,
  userId int,
  content varchar(256)
);

/* Create Posts */
INSERT INTO Posts (id, userId, content) VALUES (1, 2, 'Hello!');
INSERT INTO Posts (id, userId, content) VALUES (2, 2, 'Hello, world!');
INSERT INTO Posts (id, userId, content) VALUES (3, 3, 'Hello, fellow humans!');

/* Get all posts */
SELECT * FROM Posts;

/* Get all posts by specific user */
SELECT * FROM Posts WHERE userId=2;

/* Update specific post */
UPDATE Posts SET content='Goodbye, world!' WHERE id=3;

/* Delete specific post */
DELETE FROM Posts WHERE id=2;

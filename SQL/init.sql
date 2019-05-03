CREATE DATABASES fridge;

CREATE TABLE fridge.user
(
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    name VARCHAR(40),
    password VARCHAR(40),
    group_id INT
);

CREATE TABLE fridge.group
(
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    name VARCHAR(40)
);

CREATE TABLE fridge.stock
(
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    name VARCHAR(40),
    user_id INT,
    group_id INT,
    in_date DATETIME,
    warn_date DATETIME,
    amount INT(4)
);

INSERT INTO fridge.user
    (name, password, group_id)
VALUES
    ("Nameko", "nameko", 0);
INSERT INTO fridge.user
    (name, password, group_id)
VALUES
    ("Kashihuku", "kashihuku", 1);
INSERT INTO fridge.user
    (name, password, group_id)
VALUES
    "Junya", "junya", 1);

INSERT INTO fridge.group
    (name)
VALUES
    ("Kinoko");
INSERT INTO fridge.group
    (name)
VALUES
    ("Human");

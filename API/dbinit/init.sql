CREATE DATABASE IF NOT EXISTS userdb;

USE userdb;

DROP TABLE IS EXISTS users;

CREATE TABLE users (
    id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    firstname VARCHAR(200) DEFAULT NULL,
    lastname VARCHAR(200) DEFAULT NULL,
    email VARCHAR(200) DEFAULT NULL,
    username VARCHAR(200) DEFAULT NULL,
    password VARCHAR(200) DEFAULT NULL,
    imagen VARCHAR(200) DEFAULT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    CONSTRAINT UQ_User_Email UNIQUE (email),
    CONSTRAINT UQ_User_Username UNIQUE (username),
)
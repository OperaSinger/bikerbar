DROP DATABASE IF EXISTS bikes_db;

CREATE DATABASE bikes_db;

USE bikes_db;

CREATE TABLE bikeList (
  ID int NOT NULL AUTO_INCREMENT,
  name varchar(45) NOT NULL,
  bikeType varchar(20) NOT NULL,
  photo varchar(255) NOT NULL,
  ridden BOOLEAN DEFAULT 0,
  PRIMARY KEY (ID ) 
);
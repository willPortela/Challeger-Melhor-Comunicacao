create database registercellphone;

ALTER DATABASE"registercellphone" SET datestyle TO "ISO,DMY";

CREATE TABLE cellPhones(
    model text,
    price float,
    brand text,
    startDate date,
  	endDate date,
	  color text,
  	code text unique primary key
);
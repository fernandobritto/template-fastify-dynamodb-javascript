CREATE DATABASE semantic;

CREATE TABLE usuarios (
	id INT unique auto_increment NOT NULL,
    nome varchar(100) NOT NULL,
    user varchar(100) NOT NULL,
    email varchar(50) NOT NULL,
    senha   varchar(25) NOT NULL,
    dataCaptura date,
    
	primary key(id)
);


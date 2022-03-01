CREATE DATABASE info;
use info;

create table db_acc(
    IDD int primary key auto_increment,
    nome_email varchar(40) not null,
    password_stg varchar(50) not null
);

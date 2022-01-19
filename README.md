# fullstack challange


To setup projects locally, clone the repo and cd into  both  client and server directotries

Run npm/yarn install to install dependencies in both
directotries on terminal

Install mysql db
create db namede crud_db or your prefred name but configure it in the db.cofig file

Run the sql script below create table named drugs in the database
CREATE TABLE IF NOT EXISTS `drugs` (
  id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  name varchar(255) NOT NULL,
  quantity varchar(255),
  units varchar(255),  
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

Run both client and server using npm start


 access front end  from: http://localhost:3000/ on your browser

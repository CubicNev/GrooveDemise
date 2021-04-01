-- MySQL Script by Horacio Bustamante Cruz
-- mon 22 mar 2021 22:35:30:00 CST

-- -----------------------------------------------------
-- 						DROPPING
-- -----------------------------------------------------
/* 
DROP USER 'nodeAdmin'@'localhost';
*/

-- -----------------------------------------------------
-- 						LOCALHOST
-- -----------------------------------------------------
CREATE USER 'nodeAdmin'@'localhost' IDENTIFIED WITH mysql_native_password BY '@dm1nRul3s' WITH MAX_USER_CONNECTIONS 20;
GRANT ALL PRIVILEGES ON formData.* TO 'nodeAdmin'@'localhost'
	WITH GRANT OPTION;
-- SELECT host,user,max_user_connections,plugin FROM mysql.user WHERE user='udiAdmin';
-- SHOW GRANTS FOR 'udiAdmin'@'localhost';
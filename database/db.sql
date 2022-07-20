-- crear tabla de tasks 
-- CUURENT_TIMESTAMP = tomara la hora del momento en que se cree la tarea
-- 0 = false
-- TIMESTAMP = tipo de variabl


CREATE TABLE tasks (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(200) NOT NULL,
  description VARCHAR(300),
  done BOOLEAN NOT NULL DEFAULT 0,
  createAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP 
)

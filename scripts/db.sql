CREATE DATABASE jwtasks CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;

USE jwtasks ;

CREATE TABLE IF NOT EXISTS tasks (
    'id' INT NOT NULL AUTOINCREMENT,
    'name' VARCHAR(255) NOT NULL,
    'description' VARCHAR(255) NOT NULL,
    'created_at' timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT,
    'to_do_on' timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT,    
    'done_at' timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT,    
    PRIMARY KEY (id)
}

INSERT INTO jwtasks (name, description) VALUES 
('task1', 'description1'),
('task2', 'description2'),
('task3', 'description3'),
('task4', 'description4'),
('task5', 'description5'),
('task6', 'description6'),
('task7', 'description7'),
('task8', 'description8'),
('task9', 'description9');


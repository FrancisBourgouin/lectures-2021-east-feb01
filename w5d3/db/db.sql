DROP TABLE jokes;
DROP TABLE authors;

CREATE TABLE authors(
   id serial PRIMARY KEY,
   name TEXT,
   type TEXT
);

CREATE TABLE jokes(
    id serial PRIMARY KEY,
    question TEXT NOT NULL,
    answer TEXT,
    author_id INT REFERENCES authors(id) ON DELETE CASCADE
);


INSERT INTO authors (name, type) VALUES ('Francis Bourgouin', 'instructor'); 
INSERT INTO authors (name, type) VALUES ('Adam Marsala', 'student'); 
INSERT INTO authors (name, type) VALUES ('Dan Pappo', 'student'); 
INSERT INTO authors (name, type) VALUES ('Jasmeet Rangar', 'student'); 


INSERT INTO jokes (question, answer, author_id) VALUES ('Internet Explorer', '', 1);
INSERT INTO jokes (question, answer, author_id) VALUES ('What do you call a tree with bad intentions ?', 'A shady tree', 2);
INSERT INTO jokes (question, answer, author_id) VALUES ('I asked my french friend if they played videogames', 'They said Wii', 3);
INSERT INTO jokes (question, answer, author_id) VALUES ('Why did the knights of the round table were tired', 'There were sleepless knights', 4);
INSERT INTO jokes (question, answer, author_id) VALUES ('When will the chef let you play with the spice rack ?', 'When youll "curry" your weight in the kitchen', 1);
INSERT INTO jokes (question, answer, author_id) VALUES ('Why do hamburgers go to the gym?', 'To get better buns.', 3);
INSERT INTO jokes (question, answer, author_id) VALUES ('I’m reading a book on anti-gravity...', 'I can’t put it down', 2);



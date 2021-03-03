DROP TABLE pokemons;
DROP TABLE element_types;

CREATE TABLE pokemons(
   id SERIAL PRIMARY KEY,
   name TEXT NOT NULL,
   height FLOAT NOT NULL,
   type_id INT NOT NULL
);

CREATE TABLE element_types(
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    weakness TEXT NOT NULL
);

INSERT INTO element_types (name, weakness) VALUES ('water', 'electric');
INSERT INTO element_types (name, weakness) VALUES ('grass', 'fire');
INSERT INTO element_types (name, weakness) VALUES ('fire', 'water');
INSERT INTO element_types (name, weakness) VALUES ('electric', 'fighting');


INSERT INTO pokemons (name, height, type_id) VALUES ('Pikachu', 1.50, 4);
INSERT INTO pokemons (name, height, type_id) VALUES ('Charmander', 2.50, 3);
INSERT INTO pokemons (name, height, type_id) VALUES ('Squirtle', 4.50, 1);
INSERT INTO pokemons (name, height, type_id) VALUES ('Bulbasaur', 2.50, 2);
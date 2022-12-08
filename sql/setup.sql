-- Use this file to define your SQL tables
DROP TABLE IF EXISTS github_users CASCADE;
DROP TABLE IF EXISTS posts CASCADE;
-- The SQL in this file will be executed when you run `npm run setup-db`
-- CREATE TABLE users (
--   id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
--   email VARCHAR,
--   password_hash VARCHAR NOT NULL,
--   first_name VARCHAR NOT NULL,
--   last_name VARCHAR NOT NULL
-- );

CREATE TABLE github_users (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    login TEXT NOT NULL,
    email TEXT,
    avatar TEXT
);

CREATE TABLE posts (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  title VARCHAR,
  content VARCHAR(255)
);

INSERT INTO posts (title, content) VALUES
('Oy! Ello There!', 'You! Yeah, you, mate. Whatchoo doin on my github, eh?'),
('Song lyrics are', 'Cool. Yeah, cool. Thats deep, man');

-- psql -U misch -d noteful-app -f /Users/misch/Thinkful/noteful-app-v2/db/noteful.sql;
-- DROP TABLE notes;

-- DROP TABLE IF EXISTS id;

-- CREATE TABLE tags (
--     id serial PRIMARY KEY,
--     name text NOT NULL UNIQUE
-- );

-- CREATE TABLE notes_tags (
--   note_id INTEGER NOT NULL REFERENCES notes ON DELETE CASCADE,
--   tag_id INTEGER NOT NULL REFERENCES tags ON DELETE CASCADE
-- );
-- ALTER SEQUENCE tags_id_seq RESTART WITH 1000;

-- INSERT INTO tags (name) VALUES
-- ('Sports'),('animals'),('news');

-- INSERT INTO notes_tags (note_id, tag_id) VALUES ('6', '1001');
SELECT title as notes_title, tags.name as tag_name, folders.name as folders_name FROM notes
LEFT JOIN folders ON notes.folder_id = folders.id
LEFT JOIN notes_tags ON notes.id = notes_tags.note_id
LEFT JOIN tags ON notes_tags.tag_id = tags.id;

-- ALTER SEQUENCE folders_id_seq RESTART WITH 100;
-- INSERT INTO folders (name) VALUES
--   ('Archive'),
--   ('Drafts'),
--   ('Personal'),
--   ('Work');

-- CREATE TABLE notes (
--   id serial PRIMARY KEY,
--   title text NOT NULL,
--   content text,
--   created timestamp DEFAULT now(),
--   folder_id int REFERENCES folders(id) ON DELETE SET NULL
-- -- );
-- INSERT INTO notes (title, content, folder_id) VALUES
--   (
--     '5 life lessons learned from cats',
--     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...',
--     101
--   );

-- SELECT * FROM notes
-- LEFT JOIN folders ON notes.folder_id = folders.id;

-- SELECT * FROM notes
-- LEFT JOIN folders ON notes.folder_id = folders.id
-- WHERE notes.id = 1005;
START TRANSACTION;

    CREATE TABLE "users" (
        id serial PRIMARY KEY,
        email VARCHAR(255) NOT NULL,
        password VARCHAR(50) NOT NULL
    );

    CREATE TABLE "posts" (
        id serial PRIMARY KEY,
        title VARCHAR(255),
        content VARCHAR(255),
        user_id INTEGER,
        FOREIGN KEY (user_id) REFERENCES users (id)
    );

    ALTER TABLE "users" ADD CONSTRAINT user_email UNIQUE (email);

COMMIT;
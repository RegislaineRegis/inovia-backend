CREATE TABLE "user" (
  "id" BIGSERIAL NOT NULL PRIMARY KEY,
  "email" VARCHAR(120) NOT NULL,
  "password" TEXT NOT NULL
);

CREATE TABLE "customer" (
  "id" BIGSERIAL NOT NULL PRIMARY KEY,
  "user_id" BIGINT NOT NULL REFERENCES "user" ("id"),
  "name" VARCHAR(120) NOT NULL,
  "address" VARCHAR(200) NOT NULL,
  "phone" VARCHAR(30) NOT NULL,
  "email" VARCHAR(120) NOT NULL,
  "birthDate" DATE NOT NULL,
  "profilePhoto" TEXT NOT NULL
);

CREATE TABLE "sale" (
  "id" BIGSERIAL NOT NULL PRIMARY KEY,
  "customer_id" BIGINT NOT NULL REFERENCES "customer" ("id"),
  "status" VARCHAR(10) NOT NULL
);

CREATE TABLE "sale_product" (
  "id" BIGSERIAL NOT NULL PRIMARY KEY,
  "sale_id" BIGINT NOT NULL REFERENCES "sale" ("id"),
  "product_id" VARCHAR(120) NOT NULL,
  "name" VARCHAR(100) NOT NULL,
  "brand" VARCHAR(30) NOT NULL,
  "label" VARCHAR(30) NOT NULL,
  "quantity" DECIMAL(10,2) NOT NULL,   
  "tax" DECIMAL(10,2) NOT NULL DEFAULT 0,
  "price" DECIMAL(10,2) NOT NULL
);

INSERT INTO "user" ("id","email", "password") VALUES
  (1,'teste@email.com','$2b$10$o7h8OAIkQTE7XC82M.xX4OqWhCp9mPK8vPneTCyu53QHMyWSR81Gm'); /*  senha: User123*  */

INSERT INTO "customer" ("id", "user_id", "name", "address", "phone", "email", "birthDate", "profilePhoto") VALUES (
  '2', NULL, 'Ana Ferreira ','R: Jose Augusto, 123 São Paulo -SP Brazil', '11 99865-5632', 'anaferreira@gmail.com', '1984-11-23',
  'gerarumafoto.jpeg'
);

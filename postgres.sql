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
  (1,'teste@email.com', '1c37466c159755ce1fa181bd247cb925'); 
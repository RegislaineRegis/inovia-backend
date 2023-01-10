
const { env } = process;
const vars = {
  port: Number(env.PORT || 3001),
  DB_PORT: Number(env.DB_PORT || 5432),
  postgres: env.POSTGRES || 'postgres://user:pass@localhost:5432/inovia',
  DATABASE: 'inovia',
  POSTGRES_USER: 'postgres',
  POSTGRES_PASSWORD: 'postgres',
  DIALECT: 'postgres'
};

export default vars;

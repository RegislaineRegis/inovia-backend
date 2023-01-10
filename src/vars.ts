
const { env } = process;
const vars = {
  port: Number(env.PORT || 3001),
  DB_PORT: Number(env.DB_PORT || 5432),
  postgres: env.POSTGRES || 'postgres://postgres:postgres@localhost:5432/inovia'
};

export default vars;

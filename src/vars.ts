const { env } = process;
const vars = {
  port: Number(env.PORT || 3001),
  postgres: env.POSTGRES || 'postgres://user:pass@localhost:5432/inovia'
};

export default vars;

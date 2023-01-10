import app from './app';
import vars from '$/vars';
import sequelize from './models/sequelize';


sequelize.authenticate()
  .then(() => app.listen(vars.port, () => {
    console.log(`running on port ${vars.port}`);
  }))
  .catch(({ message, ...err }: Error) => {
    console.log(message, err);
    process.exit(1);
  });


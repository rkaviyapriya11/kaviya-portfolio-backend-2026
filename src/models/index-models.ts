
const models: any = {};

import userContact from "./Contact/contact-model";

models.userContact = userContact


Object.values(models).forEach((model: any) => {
  if (model.associate) {
    model.associate(models);
  }
});

// Sync the database and alter tables to match models
// sequelize.sync({ alter: true })
//   .then(() => {
//     console.log('connected to database.');
//   })
//   .catch((error: any) => {
//     console.error('Error syncing tables: ', error);
//   });

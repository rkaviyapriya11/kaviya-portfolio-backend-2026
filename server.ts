import express from 'express';
import cors from 'cors';
import './src/models/index-models';
import ContactDetails from './src/models/Contact/contact-model';
import setupRoutes from './src/routes/index-routes';


export const app = express();

app.use(express.json());
app.use(cors({ origin: '*' }));

app.get('/', (_req, res) => {
  res.send('Server is running');
});

setupRoutes(app);

void ContactDetails.sync({ alter: true });

const port = 9070;
console.log(`Starting server on port ${port}`);
app.listen(port, '0.0.0.0', () => {
  console.log(`Server running on port ${port}`);
});

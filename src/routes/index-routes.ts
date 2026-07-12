import type { Router } from 'express';
import contactRoutes from './contact.routes';

export default function setupRoutes(app: { use: (arg0: Router) => void }) {
  app.use(contactRoutes);
}
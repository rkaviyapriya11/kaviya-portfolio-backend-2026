import { Router } from 'express';
import { ContactDetailsController } from '../controllers/contact-details/contact-controller';

const router = Router();

router.post('/v1/user/create-contact', ContactDetailsController);

export default router;

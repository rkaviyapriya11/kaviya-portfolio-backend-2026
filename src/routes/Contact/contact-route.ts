import { Router } from 'express';
import { ContactDetailsController } from '../../controllers/contact-details/contact-controller';

const UserContact = Router();

UserContact.post('/v1/user/create-contact', ContactDetailsController);

export default UserContact;

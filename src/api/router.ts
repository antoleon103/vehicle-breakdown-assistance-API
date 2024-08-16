import { Router } from "express";

const router = Router();

router.use('/login', require('./login/login.controller'));
router.use('/signup', require('./signup/signup.controller'));
router.use('/new-request', require('./newrequest/newrequest.controller'));
router.use('/view-request', require('./newrequest/newrequest.controller'));
router.use('/feedback', require('./feedback/feedback.controller'));
router.use('/mechanic', require('./mechanic/mechanic.controller'));

module.exports = router
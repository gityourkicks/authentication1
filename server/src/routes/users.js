import { Router } from 'express';
import { isLoggedIn, tokenMiddleware } from '../middleware/auth.mw';

let router = Router();

router.get('/me', tokenMiddleware, isLoggedIn, (req, res) => {
    res.json(req.user);
});

export default router;
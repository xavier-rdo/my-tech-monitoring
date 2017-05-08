import express from 'express';
import ensureLoggedIn from '../middlewares/ensureLoggedIn';

const router = express.Router();

/**
 * Handle user signup (registration). Also grant JWT to signed-up user.
 */
router.post('/signup', (req, res) => {
    // @todo: unimplemented yet
    res.status(201).json({
        'message': 'Created'
    });
});

/**
 * Handle user signin (login). Also grant JWT to signed-in user.
 */
router.post('/signin', (req, res) => {
    // @todo: unimplemented yet
    res.status(204).end();
});

/**
 * Handle current user's profile update.
 */
router.patch('/', ensureLoggedIn, (req, res) => {
    // @todo: unimplemented yet
    const currentUser = req.currentUser;

    res.status(204).end();
});

/**
 * Handle current user's password reset
 */
router.patch('/reset-password', ensureLoggedIn, (req, res) => {
    // @todo: unimplemented yet
    const currentUser = req.currentUser;

    return res.status(204).end();
});

export default router;

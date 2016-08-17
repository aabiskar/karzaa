import express from 'express';
import personController from './personController';

let router = express.Router();

router.get('/', (req, res) => {
    res.redirect('/applications');
});

router.use('/applications', personController);

router.use(function (req, res) {
    res.redirect('/');
});

export default router;

import express from 'express';
import PersonService from '../services/PersonService';
import applicationFormFilter from '../filters/applicationFormFilter';

let router = express.Router();

router.get('/', (req, res) => {
    new PersonService().getList()
        .then((result) => {
            res.render('applications/list', {
                title: 'Home | Karzaa',
                applications: result.toJSON()
            });
        })
        .catch((error) => {
            res.render('applications/error', {error: error});
        });
});

router.get('/add', (req, res) => {
    res.render('applications/add', {
        title: 'Add new application | Karzaa'
    });
});

router.post('/add', (req, res) => {
    applicationFormFilter(req)
        .then(() => {
            // Add to database using service.
            res.json('Success!!!');
        })
        .catch((error) => {
            // Display errors in form.
            // TODO: Display the filled form field values
            res.render('applications/add', {
                title: 'Add new application | Karzaa',
                formData: req.body,
                errors: error
            });
        });
});

export default router;

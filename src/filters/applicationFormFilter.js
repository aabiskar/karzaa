import validator from '../utils/validator';

export default (req) => {
    // Sanitize data
    // Personal info
    req.sanitize('person[first_name]').trim();
    req.sanitize('person[middle_name]').trim();
    req.sanitize('person[last_name]').trim();
    req.sanitize('person[age]').toInt();
    req.sanitize('person[gender]').trim();
    req.sanitize('person[email]').trim();
    req.sanitize('person[phone]').toInt();
    req.sanitize('person[address][zone]').trim();
    req.sanitize('person[address][district]').trim();
    req.sanitize('person[address][city]').trim();
    req.sanitize('person[address][ward_no]').toInt();
    req.sanitize('person[address][tole]').trim();

    // Company info
    req.sanitize('company[name]').trim();
    req.sanitize('company[email]').trim();
    req.sanitize('company[phone]').toInt();
    req.sanitize('company[address][zone]').trim();
    req.sanitize('company[address][district]').trim();
    req.sanitize('company[address][city]').trim();
    req.sanitize('company[address][ward_no]').toInt();
    req.sanitize('company[address][tole]').trim();

    // Check the request data
    // Personal info
    req.check('person[first_name]', 'Please enter the first name to proceed.').notEmpty();
    req.check('person[last_name]', 'Please enter the last name to proceed.').notEmpty();
    req.check('person[age]', 'The age of the applicant should be between 18 and 60.').notEmpty()
        .isInt({
            min: 18,
            max: 60
        });
    req.check('person[gender]', 'Please provide a valid gender information of applicant.').notEmpty()
        .isIn(['Male', 'Female', 'Other']);
    req.check('person[email]', 'Please enter a valid email address of the applicant.').notEmpty().isEmail();
    req.check('person[phone]', 'Please enter a valid phone address of the applicant.').notEmpty().isInt({
        min: 9,
        max: 10
    });
    req.check('person[address][zone]', 'Please provide a valid zone information of applicant.').notEmpty()
        .isIn(['Bagmati']);
    req.check('person[address][district]', 'Please provide a valid district information of applicant.').notEmpty()
        .isIn(['Kathmandu', 'Lalitur', 'Bhaktapur']);
    req.check('person[address][city]', 'Please enter city information of applicant.').notEmpty();

    if (req.body.person.address.ward_no) {
        req.check('person[address][ward_no]', 'Please enter valid ward number of applicant.').notEmpty()
            .isInt({min: 1});
    }

    // Company info
    req.check('company[name]', 'Please enter the name of company to proceed.').notEmpty();
    req.check('company[email]', 'Please enter a valid email address of the company.').notEmpty().isEmail();
    req.check('company[phone]', 'Please enter a valid phone address of the company.').notEmpty().isInt({
        min: 9,
        max: 10
    });
    req.check('company[address][zone]', 'Please provide a valid zone information of company.').notEmpty()
        .isIn(['Bagmati']);
    req.check('company[address][district]', 'Please provide a valid district information of company.').notEmpty()
        .isIn(['Kathmandu', 'Lalitur', 'Bhaktapur']);
    req.check('company[address][city]', 'Please enter city information of company.').notEmpty();

    if (req.body.company.address.ward_no) {
        req.check('company[address][ward_no]', 'Please enter valid ward number of company.').notEmpty()
            .isInt({min: 1});
    }

    // Document
    req.check('document[citizenship]', 'Please provide the citizenship of the applicant.').notEmpty();
    req.check('document[passport]', 'Please provide the passport of the applicant.').notEmpty();
    req.check('document[statement]', 'Please provide the bank statement of the applicant.').notEmpty();
    req.check('document[job_letter]', 'Please provide the job letter of the applicant.').notEmpty();
    req.check('document[payslip]', 'Please provide the payslip of the applicant.').notEmpty();

    return validator(req);
}

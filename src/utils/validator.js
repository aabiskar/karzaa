module.exports = function (req) {
    return new Promise((resolve, reject) => {
        let errors = req.validationErrors();

        if (errors) {
            reject(errors);
        }

        resolve(req);
    })
};

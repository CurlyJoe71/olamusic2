const Library = require('./librarymodel');

exports.getAll = (req, res) => {
    console.log('I received your getAll request.');
    // console.log(req);
    // console.log(req.body);
    Library.find({})
        .then(response => {
            console.log(response);
            res.json(response);
        })
        .catch(err => {
            console.log(err);
        });
};
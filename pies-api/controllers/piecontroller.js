let express = require('express');
let router = express.Router();

router.get('/tasty', function (req, res){
    res.send([
        {key: 'value', key2: 'value'},
        {key: 'value', key2: 'value'},
        {key: 'value', key2: 'value'},
        {key: 'value', key2: 'value'},
        {key: 'value', key2: 'value'},
    ]);
});


module.exports = router;
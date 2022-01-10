var express = require('express');
var router = express.Router();
var studentModule = require('../modules/studentModule');

router.post('/save', studentModule.poststudent);
router.get('/get', studentModule.getstudent);
router.put('/update/:id', studentModule.updatestudent);
router.delete('/delete/:id', studentModule.deletestudent);

module.exports = router;
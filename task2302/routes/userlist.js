var express = require('express');
var router = express.Router();
const userlistcontroller=require("../controllers/userlistcont")


router.post('/register',userlistcontroller.createUser);
router.post('/loginuser',userlistcontroller.getUser);
router.post('/userData',userlistcontroller.verifyUser);

module.exports = router;
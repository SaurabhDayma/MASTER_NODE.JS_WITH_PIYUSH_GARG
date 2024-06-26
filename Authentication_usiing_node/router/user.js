const express =  require("express");

const {handelUserSignup} =  require("../controller/usersignup");
const { handelUserLogin} = require("../controller/usersignup");

const router =  express.Router();

router.post('/', handelUserSignup);
router.post('/login', handelUserLogin);

module.exports =  router;

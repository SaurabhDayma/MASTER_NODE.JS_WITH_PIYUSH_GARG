const express = require("express");

const users =  require("../MOCK_DATA.json");


const {handelroutes , handelUserById, handelPostReq} =  require("../controller/user1");

const router =  express.Router();

router.get('/', handelroutes); 


router.get("/:id", handelUserById) 


router.post('/',handelPostReq);

module.exports =  router;
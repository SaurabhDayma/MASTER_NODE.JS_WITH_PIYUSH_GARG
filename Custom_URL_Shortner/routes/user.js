const express = require("express");

const router =  express.Router();

const { handelShortUrl } =  require("../controller/user")

router.post("/", handelShortUrl);

module.exports  =  router;


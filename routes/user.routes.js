const express = require("express")
const router = express.Router()
const { body, validationResult } = require('express-validator');



router.get("/register", (req, res) => {
    res.render("register")
})


router.post("/register",

    body("email").trim().isEmail().isLength({min : 8}),
    body("password").trim().isLength({ min: 5 }),
    body("username").trim().isLength({ min: 3 })

    , (req, res) => {

        const error = validationResult(req);

        if(!error.isEmpty())
        {
            return res.status(400).json({
                error : error.array(),
                message : "Invalid Data"
            })
        }
        res.send(error)
    })

module.exports = router
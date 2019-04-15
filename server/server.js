const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require('mongoose');

const messageRoute = express.Router();
const PORT = 3001;
let nodemailer = require("nodemailer");
require("dotenv").config();


// // Make public a static folder
app.use(express.static("public"));

app.use(cors());
app.use(bodyParser.json());

mongoose.connect("mongodb://127.0.0.1:27017/personal", { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once("open", function() {
    console.log("MongoDB database connection established successfully");
});

// app.get("/*", (req, res) => {
//     res.sendFile(path.join(__dirname, "/../client/build/index.html"));
//   });

messageRoute.route("/sendMessage/contact").post(function(req, res) {
    const { email, name, message } = req.body;

    if (name === "" || email === "" || message === "") {
            res.json("missing information");
    } else {

        console.log(process.env.EMAIL_ADDRESS);
        let ADDRESS = "elchaparrito1@gmail.com";
        let PASSWORD = "Javascript2019";
        
        console.log("email address", ADDRESS, PASSWORD);
        
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: ADDRESS,
                pass: PASSWORD
            },
        });
        
        const mailOptions = {
            from: `${email}`,
            replyTo: `${email}`,
            to: ADDRESS,
            subject: `Message from ${name}`,
            text: `Hello,\n\n${message}`
        };
        
        transporter.sendMail(mailOptions, function(err, response) {
            if (err) {
                console.error("there was an error: ", err);
            } else {
                console.log("here is the res: ", response);
                res.status(200).json("email sent");
            }
        });
    }
});

//using router routes
app.use("/api", messageRoute);

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});


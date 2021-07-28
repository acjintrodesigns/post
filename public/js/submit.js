// this needs to be the js file that sends the information like name, surname,  position, email and attachment(cv submission)
const nodemailer = require('nodemailer');
const multer = require('multer'); // handling docs and images (attachments)
const fs = require('fs'); // used to delete files from storing it

var subject;
var body;
var path;

var Storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './docs') //storing the file into the folder "docs"
    },
    filename: function (req, file, callback) {
        callback(null, file.fieldname + "_" + Date.now() + "_" + file.originalname)
    } // creating the name of the file to be stored -location + date + original filename
});

//handling the upload via multer
var upload = multer({
    storage: Storage
}).single('pdf');

app.get('/submit',( req, res) => {
    res.sendFile('/submit.html')
})


//sending emails via nodemailer
app.post('/sendemail', (req, res) => {

    //EXCECUTE THIS MIDDLEWARE TO UPLOAD PDF

    upload(req, res, function(err) {
        if (err) {
            console.log(err)
            return res.end("Something went wrong")
        } else {
            
            subject = req.body.subject
            body = req.body.body
            
            path = req.file.path

            console.log(subject)
            console.log(body)
            console.log(path)


            var transporter = nodemailer.createTransport({
                host: '***********',
                port: 465,
                secure: true,
                auth: {
                    user: '****************',
                    pass: '****',
                },
                tls: {
                    rejectUnauthorized: false
                }

            });

            var mailOptions = {
                from: '"**"*****',
                to: '************',
                subject: subject,
                text: body,
                attachments: [
                    {
                        path: path
                    }
                ]
            };

            transporter.sendMail(mailOptions, function (err, info) {
                if (err) {
                    console.log(err);
                } else {
                    console.log("Email Sent" + info.response)
                    fs.unlink(path, function (err) {
                        if (err) {
                            return res.end(err)
                        } else {
                            console.log("Deleted")
                            return res.redirect('result.html')
                        }
                    })
                }
            });
        }
    });
});
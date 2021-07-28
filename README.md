# Multiple nodemailer post options

This website /app uses multer and nodemailer to send information from the input text area and a document like cv in any form like pdf or word document as well as the ordinary contact form using modemailer.

I followed 2 TUTORIALS by traversy media on nodemailer AND Send Email Messages With Attachments Using NodeMailer AND multer BY Coding Shiksha and tried to combine it into 1 website/app  but i realized that i need to create them on separate pages as both of them were inserted into the app.js file.

the two pages that were created are:
1. Submit page for submission of info (input fields) including uploading and sending a pdf file for cv purpose.
2. Contact page is the ordinary contact us page. which submits the ordinary information 
 but i need to put it on different js pages like submit.js and a contact.js but I don't know how to separate it from the main app.js file. can someone please assist me i went as far as i could and did a great job in breaking it. i am a newbie to nodejs just to clarify....

i stripped out the code from the app.js file now and seperated them to its relevant folder but now the below issues occur...

issues on submit page: 
Cannot POST /sendemail


issues on contact page: 
Cannot POST /send 


Here are the tutorial links:
Nodemailer - Send Emails From Your Node.js App BY Traversy media:
 https://www.youtube.com/watch?v=nF9g1825mwk&t=1170s

NodeMailer AND multer BY Coding Shiksha:
 https://www.youtube.com/watch?v=nsZnpqXaxPo


#nodemailer #nodejs #multer

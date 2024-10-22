// this file is used to scrape the email content from the Gmail page. 1) open the email, 2) run this script in the console, 3) the script will extract the email content and log it to the console.

// Safely attempt to extract the subject
let subjectElement = document.querySelector('h2.hP');
let subject = subjectElement ? subjectElement.innerText : 'Subject not found';

// Safely attempt to extract the sender name
let senderNameElement = document.querySelector('.gD');
let senderName = senderNameElement ? senderNameElement.innerText : 'Sender name not found';

// Safely attempt to extract the sender email
let senderEmailElement = document.querySelector('.go');
let senderEmail = senderEmailElement ? senderEmailElement.innerText : 'Sender email not found';

// Safely attempt to extract the email body
let bodyElement = document.querySelector('.ii.gt div.a3s');
let body = bodyElement ? bodyElement.innerText : 'Body not found';

// Log the extracted results
console.log("Subject: ", subject);
console.log("Sender Name: ", senderName);
console.log("Sender Email: ", senderEmail);
console.log("Body: ", body);
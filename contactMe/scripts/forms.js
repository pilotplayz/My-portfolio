document.getElementById("contactForm").addEventListener("submit", function(e) {
e.preventDefault(); // Prevent the page from reloading
// Collect all field values
const name = document.getElementById("name").value;
const email = document.getElementById("email").value;
const password = document.getElementById("password").value;
const phone = document.getElementById("phone").value;
const website = document.getElementById("website").value;
const age = document.getElementById("age").value;
const dob = document.getElementById("dob").value;
const time = document.getElementById("time").value;
const color = document.getElementById("color").value;
const range = document.getElementById("range").value;
const topic = document.getElementById("topic").value;
const message = document.getElementById("message").value;
// Get selected radio
const contactMethod = document.querySelector('input[name="contactMethod"]:checked').value;
// Get selected checkboxes
const services = Array.from(document.querySelectorAll('input[name="service"]:checked'))
.map(cb => cb.value)
.join(", ") || "None";
// Display everything in an alert
alert(
`--- CONTACT FORM DATA ---\n\n` +
`Name: ${name}\nEmail: ${email}\nPassword: ${password}\nPhone: ${phone}\nWebsite:
${website}\nAge: ${age}\nDate of Birth: ${dob}\nPreferred Time: ${time}\nFavorite Color:
${color}\nInterest Level: ${range}\nContact Method: ${contactMethod}\nServices Interested In:
${services}\nTopic: ${topic}\nMessage: ${message}`
);
// Reset the form
this.reset();
});
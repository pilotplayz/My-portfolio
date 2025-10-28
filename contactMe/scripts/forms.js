document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent reload

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


    // Hide success message after 5 seconds
    setTimeout(() => {
        successMsg.style.display = "none";
    }, 5000);
});

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const success = document.getElementById("formSuccess");

  if (!form) return console.error("No form with id='contactForm' found.");

  const val = (id) => {
    const el = document.getElementById(id);
    return el ? el.value : "";
  };
 // Handle form submission
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = val("name");
    const email = val("email");
    const password = val("password");
    const phone = val("phone");
    const website = val("website");
    const age = val("age");
    const dob = val("dob");
    const time = val("time");
    const color = val("color");
    const range = val("range");
    const topic = val("topic");
    const message = val("message");

   // Get selected radio button
    const contactMethodEl = document.querySelector('input[name="contactMethod"]:checked');
    const contactMethod = contactMethodEl ? contactMethodEl.value : "Not selected";

    const services = Array.from(document.querySelectorAll('input[name="service"]:checked'))
      .map(cb => cb.value)
      .join(", ") || "None";

    // Show inline success message
    if (success) {
      success.style.display = "block";
      success.textContent = `✅ Thanks${name ? `, ${name}` : ""}! Your form was submitted.`;
    }
    // Reset and auto-hide success
    this.reset();
    setTimeout(() => { if (success) success.style.display = "none"; }, 5000);
  });
});
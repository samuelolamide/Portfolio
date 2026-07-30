// =========================================================
// Wait for the full HTML to be parsed before touching the DOM.
// Without this, script.js (loaded at the bottom of <body>, so
// it usually doesn't NEED this — but it's a safe habit) could
// try to grab an element that doesn't exist yet.
// =========================================================
document.addEventListener("DOMContentLoaded", () => {
  // =========================================================
  // 1. FOOTER YEAR
  // Instead of hardcoding "2026" in the HTML (which goes stale
  // every January), we compute it once here.
  // =========================================================
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // =========================================================
  // 2. CONTACT FORM
  // Connected to EmailJS — emailjs.sendForm() reads the form's
  // input values directly (matched by `name` attribute to the
  // {{name}}, {{email}}, {{message}} variables in your EmailJS
  // template) and sends them straight to your connected inbox.
  // =========================================================
  const contactForm = document.querySelector(".contact-form");

  if (contactForm) {
    // Create one feedback element and reuse it, instead of
    // creating a new one on every submit attempt.
    const feedback = document.createElement("p");
    feedback.className = "form-feedback";
    contactForm.appendChild(feedback);

    contactForm.addEventListener("submit", (event) => {
      event.preventDefault(); // stop the browser's default "reload the page" behavior

      const nameInput = contactForm.querySelector('input[name="name"]');
      const emailInput = contactForm.querySelector('input[name="email"]');
      const messageInput = contactForm.querySelector(
        'textarea[name="message"]',
      );
      const submitBtn = contactForm.querySelector(".btn-submit");

      const name = nameInput.value.trim();
      const email = emailInput.value.trim();
      const message = messageInput.value.trim();

      const showFeedback = (text, isError) => {
        feedback.textContent = text;
        feedback.classList.toggle("error", isError);
        feedback.classList.toggle("success", !isError);
      };

      if (!name || !email || !message) {
        showFeedback("Please fill in every field before sending.", true);
        return;
      }

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        showFeedback("That email address doesn't look right.", true);
        return;
      }

      // Everything checks out — send it via EmailJS.
      // sendForm() returns a Promise, so we handle the three
      // possible outcomes with .then() / .catch() / .finally():
      // .then    -> it succeeded
      // .catch   -> it failed (bad IDs, network issue, etc.)
      // .finally -> runs either way, so it's the right place to
      //             reset the button regardless of outcome.
      submitBtn.disabled = true;
      submitBtn.textContent = "Sending...";

      emailjs
        .sendForm("service_bcqsi92", "template_cilv5g2", contactForm)
        .then(() => {
          showFeedback(`Thanks, ${name}! Your message has been sent.`, false);
          contactForm.reset();
        })
        .catch(() => {
          showFeedback(
            "Something went wrong sending your message — please try again or email me directly.",
            true,
          );
        })
        .finally(() => {
          submitBtn.disabled = false;
          submitBtn.textContent = "Send Message";
        });
    });
  }
});

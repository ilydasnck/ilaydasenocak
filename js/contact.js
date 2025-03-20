document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contactForm");

  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const mailtoLink = `mailto:isenocak229@gmail.com?subject=İletişim Formu: ${name}&body=Gönderen: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMesaj:%0D%0A${message}`;

    window.location.href = mailtoLink;

    // Formu temizle
    contactForm.reset();
  });
});

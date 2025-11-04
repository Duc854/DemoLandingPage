document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("cname").value.trim();
  const email = document.getElementById("cemail").value.trim();
  const msg = document.getElementById("cmsg").value.trim();
  const output = document.getElementById("contactMsg");

  if (!name || !email || !msg) {
    output.textContent = "Vui lòng điền đầy đủ thông tin.";
    output.style.color = "red";
    return;
  }

  output.textContent = "Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất.";
  output.style.color = "green";

  this.reset();
});

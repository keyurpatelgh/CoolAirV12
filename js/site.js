(function () {
  var year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());

  var form = document.getElementById("quote-form");
  if (!form) return;

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    if (!form.checkValidity()) {
      form.classList.add("was-validated");
      return;
    }

    var data = new FormData(form);
    var body = [
      "Name: " + data.get("name"),
      "Phone: " + data.get("phone"),
      "Email: " + data.get("email"),
      "Fridge type: " + data.get("kind"),
      "Brand: " + data.get("brand"),
      "",
      String(data.get("message") || "")
    ].join("\n");

    var href = "mailto:coolcare12v@gmail.com"
      + "?subject=" + encodeURIComponent("Fridge quote — " + data.get("kind"))
      + "&body=" + encodeURIComponent(body);

    window.location.href = href;
  });
})();

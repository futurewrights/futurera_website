/* Newsletter signup -> Google Form (feeds linked Google Sheet).
   Keeps the custom .newsletter-form UI; posts behind the scenes. */
(function () {
  var FORM_ACTION = 'https://docs.google.com/forms/d/e/1FAIpQLSfzCHIvC2S3u8v8h_NWvKTizOcii300955bJQ1dYw7upDD2og/formResponse';
  var EMAIL_FIELD = 'entry.878279772';

  document.querySelectorAll('.newsletter-form').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var input = form.querySelector('input[type="email"]');
      if (!input) return;
      var email = input.value.trim();
      if (!email) return;

      fetch(FORM_ACTION, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: EMAIL_FIELD + '=' + encodeURIComponent(email)
      }).catch(function () { /* opaque response; submission still recorded */ });

      form.innerHTML = '<p class="newsletter-done">Thanks &mdash; you’re on the list. We’ll be in touch.</p>';
    });
  });
})();

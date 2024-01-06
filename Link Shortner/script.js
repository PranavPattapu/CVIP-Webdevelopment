
function shortenUrl() {
  var longUrl = document.getElementById('url').value;

  var shortCode = generateShortCode();
  var shortenedUrl = window.location.href + 's/' + shortCode;

  document.getElementById('shortenedUrl').href = shortenedUrl;
  document.getElementById('shortenedUrl').textContent = shortenedUrl;
  document.getElementById('result').style.display = 'block';
}

function generateShortCode() {
  var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var shortCode = '';
  for (var i = 0; i < 6; i++) {
    shortCode += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return shortCode;
}

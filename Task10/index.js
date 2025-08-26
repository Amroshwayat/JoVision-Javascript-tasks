const btn = document.querySelector("#getIp");
btn.addEventListener("click", getIp);
function getIp() {
  fetch("https://api.ipify.org?format=json")
    .then((res) => res.json())
    .then((data) => {
      btn.textContent = data.ip;
    })
    .catch((err) => {
      btn.textContent = err;
    });
}

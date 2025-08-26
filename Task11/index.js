const btn = document.getElementById("getIp");
btn.addEventListener("click", getIp);
function getIp() {
  fetch("https://api.ipify.orgx?format=json")
    .then((res) => res.json())
    .then((data) => {
      btn.textContent = data.ip;
    })
    .catch((err) => {
      console.log(err);
      alert("Error fetching IP: " + err);
    });
}

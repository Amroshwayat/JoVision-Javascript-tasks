document.querySelector("#getIp").addEventListener("click", getIp);
function getIp() {
  fetch("https://api.ipify.org")
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
}

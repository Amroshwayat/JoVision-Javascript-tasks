function updateClock() {
  const now = new Date();
  let hour = now.getHours();
  let min = now.getMinutes();
  let sec = now.getSeconds();
  document.getElementById("clock").textContent = `${hour}:${min}:${sec}`;
}
updateClock();
setInterval(updateClock, 1000);

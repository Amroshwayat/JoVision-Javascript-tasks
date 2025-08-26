document.getElementById("submit").addEventListener("click", submit);
function submit() {
  const name1 = document.getElementById("nameInput").value;
  const age1 = document.getElementById("age").value;
  const obj = {
    name: name1,
    age: age1,
    timestamp: new Date().toLocaleString(),
  };
  const { name, age, timestamp } = obj;
  alert(`Your name is: ${name}\nYour age is: ${age}\nTimestamp: ${timestamp}`);
}

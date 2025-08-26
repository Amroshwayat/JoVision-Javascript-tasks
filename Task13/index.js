document.getElementById("submitBtn").addEventListener("click", async () => {
  const name = document.getElementById("nameInput").value.trim();

  if (!name) {
    alert("Please enter a name!");
    return;
  }
  try {
    const response = await fetch(`https://api.agify.io?name=${name}`);
    const data = await response.json();

    const { name: personName, age } = data;

    alert(`Your name is: ${personName}\nYour age is: ${age}`);
  } catch (error) {
    console.error("Error:", error);
    alert("Something went wrong while fetching the age.");
  }
});

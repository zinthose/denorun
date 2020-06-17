// Simple faas call
await fetch("https://www.boredapi.com/api/activity")
  .then(response => response.json())
  .then(data => console.log(`If you're bored, ${data.activity}.`))
  .catch(error => console.log(`Somthing Broke! ${error}`))

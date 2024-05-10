async function checkUEN(event) {
  // todo: some checks, can be deleted later
  event.preventDefault();
  console.log("submit Button Pressed");

  // Get the UENValue from the input field
  const uenValue = document.getElementById("inputUEN").value;
  // todo: some checks, can be deleted later
  console.log("UEN Value:", uenValue); // Log the UEN value

  // fetching this api route returns an array "jsonArray" containing all of the PQs
  let jsonArray;
  let pqArray;
  var url = `/api/pqs`;
  await fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.text();
    })
    .then((text) => {
      jsonArray = JSON.parse(text);
      // todo: some checks, can be deleted later
      console.log("PQList inside scope: " + jsonArray);
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
      alert("Failed to load data. Please try again later");
    });

  // checking if the UEN contains a valid PQ.
  // todo: some checks, can be deleted later
  await console.log("PQList outside scope: " + jsonArray);
  pqArray = await jsonArray.map((item) => item.pq);
  // todo: some checks, can be deleted later
  await console.log("pqArray outside scope: " + pqArray);
}

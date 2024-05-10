async function checkUEN(event) {
  // todo: some checks, can be deleted later
  event.preventDefault();
  console.log("submit Button Pressed");

  // Get the UENValue from the input field
  const uenValue = document.getElementById("inputUEN").value.toUpperCase();
  // todo: some checks, can be deleted later
  console.log("UEN Value:", uenValue); // Log the UEN value

  // fetching this api route returns an array "jsonArray" containing all of the PQs =====
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

  // =========================================================================================
  // checking if the UEN contains a valid PQ. ================================================
  // todo: some checks, can be deleted later
  await console.log("PQList outside scope: " + jsonArray);
  pqArray = await jsonArray.map((item) => item.pq);
  // todo: some checks, can be deleted later
  await console.log("pqArray outside scope: " + pqArray);
  function validateInput(input) {
    // 1. Ensure input only has 9-10 characters
    // 2. Ensure input has no special characters
    // 3. Ensure that first character is only digits or s or t, upper and lowercase accepted
    // 4. Ensure last letter is always a letter
    // 5. Ensure New UENs (starting with S&T), has valid PQ (check against PQ List from database/var pqArray)
    // 1-4
    let isValidFormat = /^[0-9stST][a-zA-Z0-9]{7,8}[a-zA-Z]$/.test(input);
    if (!isValidFormat) {
      alert(
        "Input must be 9-10 characters long and the last character as a letter."
      );
      return;
    }
    // 5
    // check if entered UEN is NEW UEN type: if not new UEN type, isValid ? else check against PQList
    const isNewUEN = /^[stST]$/.test(uenValue.slice(0, 1));
    // todo: some checks, can be deleted later
    console.log("input's first character: " + uenValue.slice(0, 1));
    console.log("Is new UEN?: " + isNewUEN);

    if (isNewUEN === false) alert("Input is valid.");
    if (isNewUEN) {
      for (let i = 0; i < pqArray.length; i++) {
        if (uenValue.slice(3, 5) == pqArray[i]) {
          console.log(uenValue.slice(3, 5) + ":" + pqArray[i]);
          alert("Input is valid.");
          return;
        }
      }
      alert("Input must contain a valid PQ.");
      return;
    }
  }
  await validateInput(uenValue);
  // =========================================================================================
}

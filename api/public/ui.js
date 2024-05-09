function handleChange(event) {
  console.log(event.target.value);
  // to do: parse the value into URL in checkUEN
}

function isValidUEN(UEN, pqList) {}

function checkUEN(event) {
  event.preventDefault();
  console.log("submit Button Pressed");

  var url = `/api/pqs`;
  fetch(url)
    .then((response) => {
      return response.text();
    })
    .then((text) => {
      const jsonArray = JSON.parse(text);
      var isValid = isValidUEN(text, jsonArray);
    })
    .catch();
}

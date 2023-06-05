function handleKeypadPress(key) {
  // 12 pressed then pressed DEL
  let displayElement = document.querySelector(".display"); // <section>
  let previousValue = displayElement.textContent; //

  displayElement.textContent = previousValue + key; //

  //delete the value from display one by one when onclick event for DEL key

  // if del key  was pressed by user> remove the last character from the display
  if (key === "DEL") {
    previousValue = previousValue.slice(0, -1);

    displayElement.textContent = previousValue;
    console.log(previousValue);
  }
}

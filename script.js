function handleKeypadPress(key) {
  // 12 pressed then pressed DEL
  let displayElement = document.querySelector(".display"); // <section>
  let previousValue = displayElement.textContent; //

  let plusExists = previousValue.includes("+");
  if (plusExists && key === "+") {
    //in JS and is written as &&/ to include more than one if conditions && can be used and executed.
    return;
  }
  // example let text = "Hello world, welcome to the universe.";
  // let result = text.includes("world");

  displayElement.textContent = previousValue + key; //

  //delete the value from display one by one when onclick event for DEL key

  // if del key  was pressed by user> remove the last character from the display
  if (key === "DEL") {
    previousValue = previousValue.slice(0, -1);

    displayElement.textContent = previousValue;
    console.log(previousValue);
  }
}

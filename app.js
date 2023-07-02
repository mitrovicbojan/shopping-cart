function validating() {
  let input = document.querySelector("#email");
  let valInput = input.value;
  if (valInput.includes("@") && valInput.includes(".")) {
    let positionAt = valInput.indexOf("@");
    let positionDot = valInput.indexOf(".");
    let inbtw = valInput.substring(positionAt + 1, positionDot);

    if (inbtw.length > 0) {
      let beforeAt = valInput.substring(0, positionAt);

      if (beforeAt.length > 2) {
        let afterDot = valInput.substring(positionDot + 1, valInput.length);
        console.log(afterDot);
        if (afterDot.length > 2) {
          console.log("Dobro je");
        }
      }
    } else {
      console.log("nije dobro");
    }

    console.log(inbtw);
  } else {
    console.log("nije validan email");
  }
  console.log(valInput);
}

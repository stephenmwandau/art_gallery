document.addEventListener("DOMContentLoaded", () => {
  const mainHeading = document.getElementById("main-heading");
  const changeHeadingButton = document.getElementById("change-heading");
  const userInput = document.getElementById("user-input");
  const showInputButton = document.getElementById("show-input");
  const output = document.getElementById("output");

  function getRandomColor() {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
  }

  changeHeadingButton.addEventListener("click", () => {
      mainHeading.textContent = "Heading Changed!";
      mainHeading.style.color = getRandomColor();
  });

  showInputButton.addEventListener("click", () => {
      const inputValue = userInput.value;
      output.textContent = `You typed: ${inputValue}`;
  });
});

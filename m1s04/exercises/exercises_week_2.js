const isNumber = (value) =>
  isNaN(value) ? (alert("O valor não é um número!"), false) : true;

const returnMedia = () => {
  const result = document.getElementById("result");
  result.style.display = "none";

  const values = [
    parseFloat(document.getElementById("value_one").value),
    parseFloat(document.getElementById("value_two").value),
    parseFloat(document.getElementById("value_tree").value),
  ];

  let sum = 0;

  const allNumbers = values.every((value) => isNumber(value));

  if (allNumbers) {
    values.forEach((value) => {
      sum += value;
    });
  } else {
    return;
  }

  const media = sum / values.length;

  result.textContent = `A média é: ${media.toFixed(2)}`;
  result.style.display = "block";
};

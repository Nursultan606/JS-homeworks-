function calculateBMI() {
  const height = parseFloat(document.getElementById("height").value);
  const weight = parseFloat(document.getElementById("weight").value);

  const bmi = weight / ((height/100) * (height/100));

  document.getElementById("bmi").textContent = bmi.toFixed(2);

  let results = "";
  if (bmi < 18.5) {
    results = "Вес ниже нормы";
  } else if (bmi >= 18.5 && bmi < 25) {
    results = "Вес в норме";
  } else {
    results = "Вес выше нормы";
  }
  document.getElementById("description").textContent = results;
}

const form = document.querySelector('form');
// console.log(form)

form.addEventListener('submit', (e) => {
  e.preventDefault();

  // console.log(height.value);
  const height = parseFloat(form.querySelector('#height').value);
  const weight = parseFloat(form.querySelector('#weight').value);

  if (isNaN(weight) || isNaN(height)) {
    alert('pls enter valid data');
    return;
  }
  const bmi = (weight * 10000) / (height * height);

  document.querySelector('#answer').innerText = bmi.toString();
});

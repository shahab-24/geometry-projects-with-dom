function calculateTriangleArea(){
  // const triangleBase = document.getElementById('traiangle-base');
  // const triangleValue = triangleBase.value;
  // const base = parseFloat(triangleValue)
  // console.log(base);

const base = commonInput('triangle-base');
const height = commonInput('triangle-height');
//   const triangleHeight = document.getElementById('triangle-height');
//   const triangleHeightValue = triangleHeight.value;
//   const height = parseFloat(triangleHeightValue);
// // console.log(height);

const area = 0.5 * base * height;

const triangleAreaResult = document.getElementById('triangle-area');
triangleAreaResult.innerText = area;



}


function rectAgnleCalculate(){
  const width = commonInput('rectangle-w');
const lenght = commonInput('rectangle-L');
const areaRect = width * lenght;

const rectangle = document.getElementById('rect-area');
rectangle.innerText = areaRect;
  
}

function commonInput (inputField){
  const inputelement = document.getElementById(inputField);
  const inputText = inputelement.value;
  const inputValue = parseFloat(inputText);
  return inputValue;
}



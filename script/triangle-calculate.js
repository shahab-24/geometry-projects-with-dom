function calculateTriangleArea(){
  const triangleBase = document.getElementById('traiangle-base');
  const triangleValue = triangleBase.value;
  const base = parseFloat(triangleValue)
  // console.log(base);


  const triangleHeight = document.getElementById('triangle-height');
  const triangleHeightValue = triangleHeight.value;
  const height = parseFloat(triangleHeightValue);
// console.log(height);

const area = 0.5 * base * height


const triangleAreaResult = document.getElementById('triangle-area');
triangleAreaResult.innerText = area;
  
}
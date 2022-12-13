
window.onload = getTrivia

async function getTrivia() {
  let response = await fetch(`https://opentdb.com/api.php?amount=10`);
  console.log(response)
  let data = await response.json()
  console.log(data)
  useApiData(data)
}
function useApiData(data)
{
  document.querySelector("#category").innerHTML = `Category: ${data.results[0].category}`
  document.querySelector("#difficulty").innerHTML = `Difficulty: ${data.results[0].difficulty}`
  document.querySelector("#question").innerHTML = `Question: ${data.results[0].question}`
  document.querySelector("#answer1").innerHTML = data.results[0].correct_answer
  document.querySelector("#answer2").innerHTML = data.results[0].incorrect_answers[0]
  document.querySelector("#answer3").innerHTML = data.results[0].incorrect_answers[1]
  document.querySelector("#answer4").innerHTML = data.results[0].incorrect_answers[2]
  
}
document.addEventListener('DOMContentLoaded',()=>{
  let answer1 = document.querySelector("#answer1")
if(answer1){
  answer1.addEventListener(`onclick`,()=>{
    alert("correct")
    getTrivia()
  })
}
 
})



function miniGame(){

let random = Math.ceil(Math.random()*10)
console.log(random);

let A = Number(prompt('Errate die zahl'));
 console.log(A);
if(A === random){
  alert ('TRUE')
}if(A !== random){
    alert ('FALSE')

}
}

miniGame()

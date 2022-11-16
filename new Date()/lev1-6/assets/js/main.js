

function aMpM(tImE){


   let A = new Date(tImE)
if(A.getHours() >12){
  console.log('PM');
}else{
  console.log('AM');
}


}
aMpM(date1)
aMpM(date2)
aMpM(date3)
aMpM(date4)


date1 = new Date(1999, 10, 5, 15)//PM
date2 = new Date()
date3 = new Date(2019, 12, 3, 12) //AM
date4 = new Date(2000, 1, 1, 11) //AM



let val = true;
let length = document.getElementsByClassName('loop')
function myFunction(){
  if(val===true)
   {
     document.getElementById('body').style.backgroundColor="black";
  document.getElementById('body').style.color="white"
  val=false;
  for(let i=0;i<length.length;i++){
  document.getElementsByClassName('loop')[i].style.color="black"
  }
  console.log(val)
   }
   else{
    document.getElementById('body').style.backgroundColor="white";
  document.getElementById('body').style.color="black"
  val=true
   }
}
 
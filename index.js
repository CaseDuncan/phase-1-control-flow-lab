function scuberGreetingForFeet(distance){
  // Write your code here!
  if(distance<400){
    return "This one is on me!"
  }
  else if(distance >200){
    return 'I will gladly take your thirty bucks.'
  
  }
  else if(distance >2500){
    return 'No can do.'
  }
}
scuberGreetingForFeet(199, 2001, 2501)

function ternaryCheckCity(city){
  if(city === ' NYC'){
    return "Ok, sounds good."
  }
  else{
    return "No go.";
  }
  // Write your code here!
}


function switchOnCharmFromTip(comment){
  // Write your code here!
  if(comment ==="generous"){
    return "Thank you so much."
  }
  // else if(comment !="generous"){
  //   return "Thank you so much."
  // }
  else{
    return "Bye.";
  }
}
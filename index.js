function scuberGreetingForFeet(someValue){
  let freeRide = 'This one is on me!';
  if (someValue <= 400){
    return freeRide;
  }
  else if (someValue <= 2000){
    return 'That will be twenty bucks.';
  }
   else if (someValue <=2500){
    return 'I will gladly take your thirty bucks.'; 
  }
    else {
     return 'No can do.';
    }
  }
  
function ternaryCheckCity(value){
  return value === 'NYC' ? "Ok, sounds good." : "No go.";
 
}

function switchOnCharmFromTip(greeting){
  switch (greeting){
    case 'generous':
      return "Thank you so much.";
      case 'not as generous':
        return "Thank you.";
        default:
          return "Bye."
          
  }
  
}
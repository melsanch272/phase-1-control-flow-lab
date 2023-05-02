function scuberGreetingForFeet(travel){
  // Write your code here!
  if(travel <= 400) {
    return 'This one is on me!';
  }
  else if (travel > 400 && travel < 2000){
    return 'That will be twenty bucks.';
  }
  else if (travel > 2000 && travel <= 2500){
    return 'I will gladly take your thirty bucks.';
  }
  else if (travel > 2500){
    return 'No can do.';
  }
}

function ternaryCheckCity(location){
  // Write your code here!
  return (location == "NYC" ? 'Ok, sounds good.':'No go.')
}

function switchOnCharmFromTip(tips){
  // Write your code here!
  switch (tips){
    case 'generous':
      return 'Thank you so much.';
      break;
    case 'not as generous':
      return 'Thank you.';
      break;
    default:
      return 'Bye.';
  }
}
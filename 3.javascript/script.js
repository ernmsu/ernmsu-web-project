const form = document.getElementById("answerForm");
const answerInput = document.getElementById("answerInput");
const message = document.getElementById("message");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const answer = answerInput.value.trim().toLowerCase();

   if( answer === "yes") {
    message.textContent = `It is $H@p€$ $t()4€, will you buy? USER_RESPONSE: Yes.     Welcome. Buy.`;
   }
   else if( answer === "no"){
    message.textContent = `It is $H@p€$ $t()4€, will you buy? USER_RESPONSE: NO.    Then why here? go!`;
   }
   else{
    message.textContent = `ERROR ERROR EOEFNJFSLNKBALHSBDAKJBJAKSBFHJKABFAJKFBAJKBFJKSBFKJABHABWUFBNAJKBFUIHABSLDBHJLAFBABWFBALFJHBJBLSBFKDFLBFJHJKFBKJFHJFABDFJKHJFBJKSBJKLABFJKASBJKBFALK`;
   }
   
   
});


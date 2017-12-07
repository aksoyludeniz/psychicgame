(document).ready(function() {


  var wordsArray = ["m", "o", "n", "k", "e", "y"];

  var showletters = document.getElementById("LettersLeft");

  var wins = document.getElementById("wins");

  var button = function () {
    myButtons = document.getElementById
    ('objectbutton');
     letters = document.createElement(
       'ul');

       for (var i = 0; i < wordsArray.length;i++)
       {
         letters.id = 'wordsArray';
          list= document.createElement(
            'li');

            list.id ="letter";

            list.innerhtml =wordsArray[i];
                check();

          myButtons.appendChild(letters);

          letters.appendChild(list);


       }
     }
      result = function ()
    {
      wordHolder = document.getElementById
      ('hold');
         correct = document.createElement(
           'ul');
         )
    }


    var random = Math.floor(math.random() * wordsArray.length-1);

    var words = WordsArray[random];

    var answer = newArray(words.length);

      for(var i = 0; i <answer.length; i++){
        answer[i] = "_";
      }

      function printAnswer(){
        for (var i = 0; i <answer.length; i++) {
          var object = document.getElementById("object");
          var letters = document.createTextNode(answer[i]);

          object.appendChild(letters);
        }
      }

    var lettertype = function(){
      var a = document.rateformular;
      var b = a.elements["something"];

      var user = b.value;

      user = user.toUpperCase();
         for (var i = 0; i < words.length; i++) {
           if(words[i] == user) {
             answer[1]= user + " ";
               var truth= true;
               }
               b.value="";
         }

         var object = document.ElementById ("object");

         object.innerHTML="";
            printAnswer();
    }




    var letter = true;
     for (var i = 0; i < words.length; i++){
       if(words[i]==="_"){
         letter = false;
       }
     }
     if (letter){
       window.alert("You Win!");
     }

     function updateScore() {
       document.querySelector("#score").innerhtml = "Score: " + score;
     }

     renderQuestion();
     updateScore();

     document.onkeyup = function(event) {
     }

     if (wins === 1) {
       return;
     }
   }

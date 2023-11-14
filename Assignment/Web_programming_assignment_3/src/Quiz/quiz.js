$(document).ready(function () {
  var score = 0;
  var count = 0;
  var q_number = 0;
  // I prepare only 5 questions, and there are 4 choices, so I made A, B, C, D list.
  // And I use it from 0th to 4th sentence. And after 4th sentence, I use from 0th again.
  var question_list = ["Which one is NOT a legal variable", "What is a correct syntax to output \"Hello World\" in Python?", "How do you insert COMMENTS in Python code?", "What is the correct syntax to output the type of a variable or object in Python?", "What is the correct file extension for Python files?"];
  var answer_list = ['D', 'A', 'B', 'D', 'D'];
  var A_list = ["_myvar", "print(\"Hello World\")", "/*This is a comment*/", "print(typeof(x))", ".pt"];
  var B_list = ["Myvar", "p(\"Hello World\")", "#This is a comment", "print(typeof x)", ".pyt"];
  var C_list = ["my_var", "echo(\"Hello World\");", "//This is a comment", "print(typeOf(x))", ".pyth"];
  var D_list = ["my-var", "echo \"Hello World\"", "None of the above", "print(type(x))", ".py"];

  //there are 4 choice and every function is simillar, so I made of that in two function.
  //check_answer function is directly changing color and score.
  function check_answer(answer) {
    if (answer === answer_list[count]) {
      $('#score').text(++score);
      $('#' + answer + ' span').css({
        'background-color': 'green',
        'border-color': 'green'
      });
    }
    else {
      $('#' + answer + ' span').css({
        'background-color': 'rgb(243, 75, 75)',
        'border-color': 'rgb(243, 75, 75)'
      });
    }

  }

  //next_question function is change after 1 second sleep.
  //return the color as white, and calculate score and question number.
  //after last question, I use modal for "play again".
  //if user want to play again, I suggest next question continuously.
  function next_question(answer) {
    setTimeout(function () {
      $('#' + answer + ' span').css({
        'background-color': 'white',
        'border-color': 'white'
      });

      $('#chance').text(++q_number + 1);
      count++;
      if(count>4) count=0;
      $('.question_gage').css('width', (q_number + 1) * 40);
      $('#question_sentence').text(question_list[count]);

      $('#A span').text(A_list[count]);
      $('#B span').text(B_list[count]);
      $('#C span').text(C_list[count]);
      $('#D span').text(D_list[count]);

      if (q_number == 4) {
        $('#total_score').text(score);
        $('.modal').css('display', 'block');
        $('#again_button').click(function () {
          q_number = 0;
          score = 0;
          $('#score').text(score);
          $('#chance').text(1);
          $('.question_gage').css('width', 40);
          $('#question_sentence').text(question_list[count]);

          $('.modal').css('display', 'none');
        })
      }
    }, 1000);
  }

  $('#A').click(function () {
    check_answer('A');
    next_question('A');
  });
  $('#B').click(function () {
    check_answer('B');
    next_question('B');

  });
  $('#C').click(function () {
    check_answer('C');
    next_question('C');
  });
  $('#D').click(function () {
    check_answer('D');
    next_question('D');
  });
})



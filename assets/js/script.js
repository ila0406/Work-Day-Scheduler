// Variables for time
var todayDate = moment().format("ddd MMM Do, YYYY");
$("#currentDay").text(todayDate);
var now = new Date().getHours();
  
  // Based on time var 'now' store past/present/future in local storage
  function storePastPresent() {
    for (let i = 8; i < 19; i++) {
      if (now > i) {
        $(`#projectTime${i}`).addClass("past");
      } else if (now == i) {
        $(`#projectTime${i}`).addClass("present");
      } else {
        $(`#projectTime${i}`).addClass("future");
      }
      //Store in Local Storage
      $(`#projectTime${i}`).val(localStorage.getItem(i));
    }
  }
  
  // Save icons within the App
  function button(arg) {
    localStorage.setItem(arg, $(`#projectTime${arg}`).val());
  }
  
  // A call to the function
  storePastPresent();
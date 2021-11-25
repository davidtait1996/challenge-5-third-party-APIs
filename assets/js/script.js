var containerEl = $(".container");


var hoursArr = ["am9", "am10", "am11", "pm12", "pm1", "pm2", "pm3", "pm4", "pm5"];
var hoursArrReverse = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];
var hoursArmyArr = [9, 10, 11, 12, 13, 14, 15, 16, 17];
var firstClick = [false, false, false, false, false, false, false, false, false]

var currentDay = moment();
var currentHour = moment().hours();

var printTable = function() {
  for(var i=0; i < hoursArr.length; i++){
    //making whole row div
    var rowEl = $("<div>")
      .addClass("row mx-auto")
      .attr("id", hoursArr[i]);
  
    //making just the time part of the orw
    var timeEl = $("<div>")
      .addClass("col-lg-1 col-2 border-top border-bottom border-start")
      .text(hoursArrReverse[i]);

    //making just the task area of the row
    var taskEl = $("<textarea>")
      .addClass("col-lg-10 col-8 border text-center align-middle")
      .text("Task" + i);
    if(currentHour > hoursArmyArr[i]){
      taskEl.addClass("bg-secondary text-white");
    } else if (currentHour === hoursArmyArr[i]) {
      taskEl.addClass("bg-warning text-white"); 
    } else {
      taskEl.addClass("bg-success text-white");
    }

    //save button area
    var saveEl = $("<div>")
      .addClass("col-lg-1 col-2 border-top border-bottom bg-info text-center align-middle");
    var saveIconEl = $("<i>")
      .addClass("fas fa-save fa-3x");
    saveEl.append(saveIconEl);


    rowEl.append(timeEl);
    rowEl.append(taskEl);
    rowEl.append(saveEl);
  
    containerEl.append(rowEl);
  };
};


printTable();

$(".row").on("click", ".col-10", function() {
  var text = $(this).text();
  console.log(text);
  $(this).text("");
  var text = $(this).text();
  console.log(text);
});

$(".row").on("click", "i", function() {
  var text = $(".row", ".col-10").text();
  console.log(text);
});

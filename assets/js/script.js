var containerEl = document.querySelector(".container");
containerEl.classList.add("mb-5");

var hoursArr = ["am9", "am10", "am11", "pm12", "pm1", "pm2", "pm3", "pm4", "pm5"];
var hoursArrReverse = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];
var hoursArmyArry = [9, 10, 11, 12, 13, 14, 15, 16, 17];

var currentDay = moment();
var currentHour = moment().hours();
console.log(currentHour);

var printTable = function() {
  for(var i=0; i < hoursArr.length; i++){
    var rowEl = document.createElement("div");
    rowEl.classList.add("row", "mx-auto");
    rowEl.setAttribute("id", hoursArr[i]);
    
    var timeEl = document.createElement("div");
    timeEl.classList.add("col-1", "border-top", "border-bottom", "border-start");
    timeEl.textContent = hoursArrReverse[i];
  
    var taskEl = document.createElement("div");
    taskEl.classList.add("col-10", "border");
    if(currentHour > hoursArmyArry[i]){
      taskEl.classList.add("bg-secondary", "text-white");
    } else {
      taskEl.classList.add("bg-success", "text-white");
    }
    taskEl.textContent = "Task";
  
    var saveEl = document.createElement("div");
    saveEl.classList.add("col-1", "border-top", "border-bottom", "bg-info");
    saveEl.textContent = "Save";
  
    console.log(saveEl);

    rowEl.appendChild(timeEl);
    rowEl.appendChild(taskEl);
    rowEl.appendChild(saveEl);
  
  
    containerEl.appendChild(rowEl);
  };
};


printTable();
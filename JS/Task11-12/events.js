var button = document.getElementsByTagName("button")[0];
var myForm = document.forms[0];
var addSubmit = myForm.elements.add;

var taskList = [];

function Item(from, to, task) {
    this.from = from;
    this.to = to;
    this.task = task;
}

button.addEventListener("click", function () {
    myForm.classList.remove("hidden");
    myForm.classList.add("open");
});

addSubmit.addEventListener("click", function(e){
    if (validate(e)){
        addToTaskList();
        e.preventDefault();
        myForm.classList.remove("open");
        myForm.classList.add("hidden");
        myForm.reset();
    }
});

function validate(e) {
    var isValid = true;

    var from = myForm.elements.start.value;
    var to = myForm.elements.end.value;
    var title = myForm.elements.title.value;

    if (from.length === 0 || to.length === 0 || title.length === 0) {
        isValid = false;
    }
    if (!isValid) {
        e.preventDefault();
        alert("Вcе поля вводов должны быть заполнены");
    }
    return isValid;
}

function addToTaskList() {
    var from = myForm.elements.start.value,
        to = myForm.elements.end.value,
        title = myForm.elements.title.value;

    var taskItem = new Item(from, to, title);
    taskList.push(taskItem);

    var item = document.createElement("li");
    item.innerHTML = from + "-" + to + "  " + title;
    tasks.appendChild(item);
}

setInterval(function () {
    var now = new Date();
    var hours = now.getHours();
    var min = now.getMinutes();
    var time = currentTime(hours, min);
    var currentTask = document.getElementById("current-task");
    taskList.forEach(function (item) {
        var content = item.from + "-" + item.to + "  " + item.task;
        if(time === item.from){
            currentTask.innerText = content;
        }
        if(time === item.to){
            currentTask.innerText = "";
        }
    });

}, 1000);

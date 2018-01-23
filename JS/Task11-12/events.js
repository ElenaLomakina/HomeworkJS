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


addSubmit.addEventListener("click", function(){
    addToTaskList();
    event.preventDefault();
    myForm.classList.remove("open");
    myForm.classList.add("hidden");
    myForm.reset();
});

function addToTaskList() {
    var from = myForm.elements.start.value;
    var to = myForm.elements.end.value;
    var title = myForm.elements.title.value;
    var taskItem = new Item(from, to, title);
    taskList.push(taskItem);

    var item = document.createElement("li");
    var content = from + "-" + to + "  " + title;
    item.innerHTML = content;
    tasks.appendChild(item);
}


console.log(taskList);
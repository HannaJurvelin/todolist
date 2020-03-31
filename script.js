function addTask() {
    event.preventDefault();
    var x = document.getElementById("taskTitle").value;
    var y = document.getElementById("taskInfo").value;
    var z = document.getElementById("folder").value;
    var d = document.getElementById("deadlineDay").value;
    var t = document.getElementById("deadlineTime").value;
    var idItem = document.getElementsByClassName("taskItem").length;

    if (x == "" || y == "") {
        if (x == "") {
            document.getElementById("taskTitle").style.borderColor = "#ff829b";
            alert("Type something to task title");
        }
        if (y == "") { 
            document.getElementById("taskInfo").style.borderColor = "#ff829b";
            alert("Type something to task info");
        }
        return false;
    }
    else {
        createNew(x, y, z, d, t, idItem)
        if (document.getElementById(z).style.display == "") {
            document.getElementById(z).style.display = 'block'
        }
    }
    var tasks = JSON.parse(localStorage.getItem("tasks"));

    let task = {
        taskTitle: x,
        taskInfo: y,
        folder: z,
        deadlineDay: d,
        deadlineTime: t,
        idItem: idItem
    }

    tasks.push(task);

    localStorage.setItem("tasks", JSON.stringify(tasks));   
}

function createNew(x, y, z, d, t, idItem) {
    document.getElementById(z).innerHTML += 
    '<div class="taskItem" id=a' + idItem + '>' + 
        '<label for="remove"> Remove </label>'+
        '<input type="checkbox" name="taskListItem" onclick="checkCheckbox(' + idItem + ')" id=' + idItem + '></input>'+
        '<h4>' +
            x + 
        '</h4>' + 
        '<p>' + 
            y + 
        '</p>' + 
        '<p>' + 
            d + 
        '</p>' + 
        '<p>' + 
            t + 
        '</p>' + 
    '</div>';
}

function checkCheckbox(idItem) {
    if (document.getElementById(idItem).checked) {
        var elem = document.getElementById('a' + idItem);
        elem.parentNode.removeChild(elem);

        var tasks = JSON.parse(localStorage.getItem("tasks"));
        var updatedList = []
        for(i = 0; i < tasks.length; i++) {
            if (!tasks[i].idItem == idItem){
                updatedList.push(tasks[i])
            }
        }
        localStorage.setItem("tasks", JSON.stringify(updatedList));   
    }
}

var date = new Date();
var currentDate = date.toISOString().slice(0,10);
var currentTime = date.getHours() + ':' + date.getMinutes();

document.getElementById('deadlineDay').value = currentDate;
document.getElementById('deadlineTime').value = currentTime;

var tasks = JSON.parse(localStorage.getItem("tasks"));
for (i = 0; i < tasks.length; i++) {
    createNew(tasks[i].taskTitle, tasks[i].taskInfo, tasks[i].folder, tasks[i].deadlineDay, tasks[i].deadlineTime, tasks[i].idItem) 
}

for (i = 0; i < document.getElementsByClassName('tasks').length; i++) {
    if (document.getElementsByClassName('tasks')[i].children.length) {
        document.getElementsByClassName('tasks')[i].style.display = 'block';
    }
}
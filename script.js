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
}

function checkCheckbox(idItem) {
    if (document.getElementById(idItem).checked) 
    {
        var elem = document.getElementById('a'+idItem);
        elem.parentNode.removeChild(elem);
}
  }

var date = new Date();
var currentDate = date.toISOString().slice(0,10);
var currentTime = date.getHours() + ':' + date.getMinutes();

document.getElementById('deadlineDay').value = currentDate;
document.getElementById('deadlineTime').value = currentTime;
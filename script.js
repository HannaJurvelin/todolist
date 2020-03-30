function addTask() {
    event.preventDefault();
    var x = document.getElementById("taskTitle").value;
    var y = document.getElementById("taskInfo").value;
    var z = document.getElementById("folder").value;
    var d = document.getElementById("deadlineDay").value;
    var t = document.getElementById("deadlineTime").value;
    var idItem = document.getElementsByClassName("taskItem").length;
    console.log(x,y);

    if (x == "" && y == "") {
        document.getElementById("taskTitle").style.borderColor = "#ff829b";
        document.getElementById("taskInfo").style.borderColor = "#ff829b";
        alert("All fields must be filled out");
        return false;
    }
    else {
        document.getElementById(z).innerHTML += 
        '<div class="taskItem" id=a' + idItem + '>' + 
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

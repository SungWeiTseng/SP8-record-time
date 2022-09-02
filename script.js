
var columns = prompt("number of input fields");

let table = document.createElement('table');
let thead = document.createElement('thead');
let tbody = document.createElement('tbody');

table.appendChild(thead);
table.appendChild(tbody);

// Adding the entire table to the body tag
document.getElementById('body').appendChild(table);

let row_1 = document.createElement('tr');
let row_2 = document.createElement('tr');

let heading = document.createElement('th');
heading.innerHTML = "Camera ID";
row_1.appendChild(heading);
let heading2 = document.createElement('th');
heading2.innerHTML = "Time";
row_1.appendChild(heading2);

for (var i = 0; i < parseInt(columns); i++) {
    let cameraRow = document.createElement('tr');
    cameraRow.innerHTML = (i + 1).toString();
    tbody.appendChild(cameraRow);

    let time = document.createElement('th');
    time.id = i.toString();
    cameraRow.appendChild(time);
}
thead.appendChild(row_1);
tbody.appendChild(row_2);

var children = row_2.children;

function getTime() {
    var date = new Date();
    var timeDetails = {
        hour: date.getHours(),
        minute: date.getMinutes(),
        second: date.getSeconds(),
    };
    return timeDetails;
}

colCount = 0;
function recordTime() {
    if (colCount == parseInt(columns)) return;
    var element = document.getElementById(colCount);
    time = getTime();
    element.innerHTML = time.hour + ":" + time.minute + ":" + time.second;
    colCount++;
}
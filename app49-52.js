// ----------- Chapter 49-52 EVENTS ----------

// Task 1
// Create a signup form and display form data in your web page on submission.

function submitBtn(){
    var name = document.getElementById("name").value;
    var fname = document.getElementById("fname").value;
    var uni = document.getElementById("Uni-id").value;
    var number = document.getElementById("number").value;
    document.write("<h2>" + "Form Successfully Submitted" + "</h2>")
    document.write("Name: " + name + "<br>")
    document.write("Fathername: " + fname + "<br>")
    document.write("ID-Code: " + uni + "<br>")
    document.write("Number: " + number + "<br>")
}
// Task 2
// Suppose in your webpage there is content area in which you have entered your item details, but user can only see some details on first look. When user clicks on “Read more" button, full detail of that particular item will be displayed. 

function seeMore(){
    var description = document.getElementById("description").innerHTML;
    document.getElementById("shortDescription").innerHTML = description
}

// Task 3
// Create a form which takes student’s details and show each student detail in table. Each row of table must contain a delete button and an edit button. On click on delete button entire row should be deleted. On click on edit button, a hidden form will appear with the values of that row. 

var table = document.getElementById('recordTable')

function addRecord(){
    var studentName = document.getElementById('stdName')
    var studentClass = document.getElementById('stdClass')
    var row = document.createElement('tr')
    var nametd = document.createElement('td')
    var classtd = document.createElement('td')
    var edittd = document.createElement('td')
    var deletetd = document.createElement('td')
    var nameText = document.createTextNode(studentName.value)
    var classText = document.createTextNode(studentClass.value)
    var editBtn = document.createElement('button')
    var editText = document.createTextNode("Edit")
    editBtn.setAttribute('onclick','editRecord(this)')
    editBtn.appendChild(editText)
    var delBtn = document.createElement('button')
    var delText = document.createTextNode("Delete")
    delBtn.setAttribute('onclick','deleteRecord(this)')
    delBtn.appendChild(delText)

    nametd.appendChild(nameText)
    classtd.appendChild(classText)
    edittd.appendChild(editBtn)
    deletetd.appendChild(delBtn)
    row.appendChild(nametd)
    row.appendChild(classtd)
    row.appendChild(edittd)
    row.appendChild(deletetd)
    table.appendChild(row)

    studentName.value = ""
    studentClass.value = ""
}

function editRecord(e){
    var val = e.parentNode.parentNode.firstChild.innerText
    var newVal = prompt("Edit your record",val)
    var classval = e.parentNode.parentNode.firstChild.nextSibling.innerText
    var newClass = prompt("Edit your Class",classval)
    e.parentNode.parentNode.firstChild.innerText = newVal
    e.parentNode.parentNode.firstChild.nextSibling.innerText = newClass
}

function deleteRecord(e){
    e.parentNode.parentNode.remove()
}

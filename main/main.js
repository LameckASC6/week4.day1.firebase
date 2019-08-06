let nameElement = document.getElementById("username");
let titleElement = document.getElementById("title");
let contentElement = document.getElementById("content");
let button = document.getElementById("submitButton");
button.addEventListener("click", updateDB);

let database = firebase.database().ref();

function updateDB(event){
    event.preventDefault();
    const name = nameElement.value;
    const title = titleElement.value;
    const content = contentElement.value;
    console.log(name + " : " + title + "- " + content);

    nameElement.value = "";
    titleElement.value  = "";
    contentElement.value = "";
    
    let value = {
        NAME: name,
        TITLE: title,
        CONTENT: content
    }

    database.push(value)
}

let database = firebase.database().ref();

database.on("child_added", addMessage);

let msgContainer = document.querySelector(".allBlogs")

function addMessage(data){
    const row = data.val();
    const name = row.NAME;
    const title = row.TITLE;
    const content = row.CONTENT;
    console.log(row);
    const div = document.createElement("div");
    let pN = document.createElement("p");
    let pT = document.createElement("p");
    let pC = document.createElement("p");
    pN.className = "Name";
    pN.innerText = `By: ${name}`;
    pT.className = "Title";
    pT.innerText = title
    pC.className = "Content"
    pC.innerText = content
    msgContainer.appendChild(div);
    div.appendChild(pT);
    div.appendChild(pN);
    div.appendChild(pC);
}
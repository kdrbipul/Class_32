// alert("did you want to see this website?")

const loadFriends= () =>{
    fetch('https://randomuser.me/api/?results=50')
    .then(Response => Response.json())
    .then(data=> displayFriends(data.results))
}

const displayFriends = (dataArray) =>{
    // console.log(data);
    const div = document.getElementById('html-friends');
    for (const friend of dataArray){
        // console.log(friend.picture);
        const divItem = document.createElement('div');
        const img = document.createElement('img');
        // console.log(img);
        img.setAttribute('src',`${friend.picture.thumbnail}`);
        // console.log(img);
        const h2 = document.createElement('h2');
        h2.innerText = `${friend.name.title} ${friend.name.first} ${friend.name.last}`;
        console.log(h2,img);
        divItem.appendChild(img);
        divItem.appendChild(h2);

        div.appendChild(divItem);
    }
}
loadFriends();
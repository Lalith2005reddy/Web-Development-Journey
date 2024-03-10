
function CreateCard(thumbnail,title, Cname, views, monthsOld, duration) {
    let viewStr;
    if(views<=1000000){
        viewStr = views/1000 + "k"
    }
    else if(views>1000000){
        viewStr = views/1000000 + "M"
    }
    let html = `<div class="image">
    <img src="${thumbnail}" id="Ytimage">
</div>
<div class="text">
    <p id="title">${title}<p>
    <p id="Cname">${Cname} . ${viewStr} views . ${monthsOld} months ago</p>
</div>
</div>`
document.querySelector(".container").innerHTML = html;
}
CreateCard("https://i.ytimg.com/vi/9JaDBYPmiJ0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLD2F1t93-iBW0-yJJptKjyJhXXFhA","JavaScript Exercise 13 - Solution & Shoutouts | Sigma Web Development Course","CodeWithHarry",720000,2,"31:00")
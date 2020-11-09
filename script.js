//<img src="https://avatars.dicebear.com/api/male/john.svg"/>;

function getAvatar() {
    var formElem = document.getElementById("avForm");

    var apiUrl = "https://avatars.dicebear.com/api/" + formElem.elements[1].value + "/" + formElem.elements[0].value + ".svg";

    var avatarImg = React.createElement("img", { src: apiUrl });

    ReactDOM.render(element, document.getElementById('avatar'));
}
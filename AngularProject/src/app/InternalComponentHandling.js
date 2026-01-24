

var usernameInput = document.getElementById("username");

usernameInput.addEventListener("input", function() {
    var username = usernameInput.value;
    print("Username input changed to: " + username);
});
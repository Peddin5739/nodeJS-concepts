document.addEventListener("DOMContentLoaded", function () {
  let button = document.getElementById("button");

  button.onclick = () => {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let result;
    console.log(button, username, password);
    fetch("/data", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((res) => {
      res.json();
    });
  };
});

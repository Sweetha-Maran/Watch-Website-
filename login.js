//Register page code written here

function Register(){
    const username=document.getElementById("regUsername").value.trim();
    const password=document.getElementById("regPassword").value.trim();

    if (username && password){
        localStorage.setItem('username',username);
        localStorage.setItem('password',password);
        alert("Hai "+username+" your account has been registered Successfully");
        window.location.href='login.html'
    }
    else{
        alert("Please fill all the Fields Required");
    }
}


// login page Written Here

function Login(){
    const enteredusername=document.getElementById("loginUsername").value.trim();
    const enteredpassword=document.getElementById("loginpassword").value.trim();

    const storedusername=localStorage.getItem("username");
    const storedpassword=localStorage.getItem("password");

    if(enteredusername===storedusername && enteredpassword ===storedpassword){
        alert("Login Successfully")
        window.location.href="home.html";
    }

    else{
        alert("Login Failed please Enter a valid Creditional"); 
    }
}


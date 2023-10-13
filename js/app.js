// nav condition
let collection = document.getElementsByClassName("nav-item-container");
if(!localStorage.getItem("user-info")){
    for (let i = 0; i < collection.length; i++) {
        collection[i].innerHTML = `
        <button class="auth-btn"><a href="/login.html" class="login-btn">Login</a></button>
        <button class="auth-btn"><a href="/register.html" class="login-btn">Register</a></button>
    `    
    }
}else{
    let user = JSON.parse(localStorage.getItem("user-info"));
    for (let i = 0; i < collection.length; i++) {
        collection[i].innerHTML = `
            <button class="auth-btn">Hello ${user.name}</button>
            <button id="logout" class="auth-btn" onclick="logout()">Logout</button>
        `
    }
}

//logout btn state
    function logout(){       
        localStorage.clear();
        window.location.href = "http://127.0.0.1:5500/index.html";
    }

//ph nav burger
document.getElementById("burgerImg").addEventListener('click',()=>{
    let burgerNav = document.getElementById("burgerNav").classList;
    console.log(burgerNav.contains('showNav'));
    if(burgerNav.contains('showNav')){
        burgerNav.remove('showNav');
    }else{
        burgerNav.add('showNav');
    }
    
})
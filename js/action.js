const request = new XMLHttpRequest();

request.addEventListener('readystatechange',()=>{
    if(request.readyState == 4 && request.status==200){
        // console.log(request.responseText);
    }else if(request.readyState == 4){
        console.log('no data, fetching error.');
    }
})

 
request.open("GET","./js/api.json");
request.send();
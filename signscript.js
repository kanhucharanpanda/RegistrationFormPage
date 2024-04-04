document.getElementById("btn1").addEventListener("click",getdata);
function getdata(e){
    e.preventDefault();
    console.log("button clicked");
    let username=document.getElementById("username").value ;
    let email=document.getElementById("email").value ;
    let password=document.getElementById("password").value ;
    let data={
        username:username,
        email:email,
        password:password
    };
    let pos={
        method:'POST',
        headers:{
        'content-Type':'application/json'
        },
        body :JSON.stringify(data)
    }
    console.log("pos=",pos);
    console.log("body=",pos.body);
    fetch("https://reqres.in/api/register",pos)
    .then((res)=>{
        if(!res.ok){
            throw Error(res.statusText);
        }
       console.log("res=",res);
       return res.json();
   }).then((data)=>
   {
       console.log(data);
    }).catch((error)=>{
        console.log(error);
    });
    window.location.href="loginh.html";
}
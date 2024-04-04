document.getElementById("btn2").addEventListener("click",getdata);
function getdata(e){
    e.preventDefault();
    console.log("button clicked");
   // let username=document.getElementById("username").value ;
    let email1=document.getElementById("email1").value ;
    let password1=document.getElementById("password1").value ;
    let data={
       // username:username,
        email1:email1,
        password1:password1
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
}
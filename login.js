var credential={
    "user":"admin",
    "password":"pass@123"
}
var submitform=(arg)=>{
    console.log(arg.user);
    console.log(arg.pass);
}
submitform(credential)
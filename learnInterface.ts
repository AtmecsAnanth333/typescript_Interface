export{}
var credential={
    "user":"admin",
    "password":"pass@123"
}
var submitform=(arg:validCredential)=>{
    console.log(arg.user);
    console.log(arg.password);
}
submitform(credential)

interface validCredential{
    user : string,
    password : string
}
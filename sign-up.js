function myFunction(){
  var pswd= document.getElementById("user-pswd");
  if (pswd.type=="password"){
    pswd.type="text";
    document.getElementById("icon").className=("fa fa-eye-slash");
  }else{
    pswd.type="password";
    document.getElementById("icon").className=("fa fa-eye");
  }
}
    


    
    
   



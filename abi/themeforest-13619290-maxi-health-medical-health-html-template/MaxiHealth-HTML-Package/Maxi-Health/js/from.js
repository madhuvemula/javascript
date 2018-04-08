function validateform(){  
var name=document.myform.name.value;  
var tel=document.myform.tel.value;  
  
if (name==null || name==""){  
  alert("Name can't be blank");  
  return false;  
}else if(tel.length<10){  
  alert("Ph no must be at least 10 characters long.");  
  return false;  
  }  
}  
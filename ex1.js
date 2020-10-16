var arr=[]; 
arr.forEach(register)
var names=[];
function register(){
    
    var name , major, ID; 
    name= document.getElementById("name").value;
    var e = document.getElementById("major");
    major = e.options[e.selectedIndex].value;
    //major= document.getElementById("major").Value;
    ID= document.getElementById("ID").value;
    //document.getElementById("result").innerHTML = name;
    var std = {n:name, i : ID , m : major  };
    arr.push("name = "+ std["n"]+ " ID= "+ std["i"] + " Major= "+ std["m"]+"<br/>");
    names.push(name);
    document.getElementById("result").innerHTML= arr;
}
function search()
{var n= document.getElementById("s").value;
var c= 0 ;
  names.forEach(function(element){if(element=n){c++;}else{c--}});
   console.log(n);//element = n =>c++)//element => console.log(element) )
    document.getElementById("res").innerHTML= c;
}
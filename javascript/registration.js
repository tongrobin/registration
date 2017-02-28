// JavaScript File
var User_data =[];
var TotalData = document.getElementById('TotalData');

function process() {
    'use strict';

    // Get form references:
    var UserName = document.getElementById('UserName').value;   //Get Value for the Username textbox
    var Name = document.getElementById('Name').value;           //Get Value for the Name textbox
    var Age = document.getElementById('Age').value;             //Get Value for the Age textbox
    var Email = document.getElementById('Email').value;         //Get Value for the Email textbox
    var Password = document.getElementById('Password').value;   //Get Value for the Password textbox

    // Reference to where the output goes:
    var output = document.getElementById('output');             //show out by display 
    
  

var UserData = {
        id: User_data.length + 1 ,
	    UserName: UserName,
	    Name: Name,
	    Email: Email,
	    Password: Password,
        Age: Age
}; // add a new data from the array 


   
var check = true;
  

for(var x =0;x<User_data.length;x++){
    if(User_data[x].UserName == UserData.UserName){
        check = false;
        
        break;
}    
}    
    
    if (check){
        User_data.push(UserData);
    }else{
        window.alert("username has been used");
    }//Check user name has been used or not 

    
    

 
    var i = User_data.length - 1;
   //show message in from 
    var message = "";
    message += '<h2>User Added</h2>Name: ' + User_data[i].UserName + ', ' + User_data[i].Name + '<br>';
    message += 'Email: ' + User_data[i].Email + '<br>';
    message += 'Password: ' + User_data[i].Password + '<br>';
    message += 'Age:' + User_data[i].Age;
    
    
    
    
    // Display the UserData object:
    output.innerHTML = message;
    Display();
      // Return false:
    return false;
}
function Display(){ //List the data into the div
    var msg = "";
    
   for (x = 0;x < User_data.length;x++){
       msg +='UserName: ' + User_data[x].UserName +'<br>';
       msg +='Name: ' + User_data[x].Name + '<br>';
       var HText = "";
       for (var y = 1;y <= User_data[x].Password.length;y++){
           HText += "*";
           console.log(HText);
       }
       msg +='Password: ' + HText + '<br>';
       msg +='Email: ' + User_data[x].Email + '<br>';
       msg +='Age:' + User_data[x].Age +'<br>';
       TotalData.innerHTML = msg;
   }
	return false;
        



} // End of process() function.
function AverageAge(){  //Average the age from the array
    'use strict';
    var AgeAvg = 0;
       for (x = 0;x < User_data.length;x++){
       AgeAvg += parseInt(User_data[x].Age);
   }
    AgeAvg = AgeAvg / User_data.length;
    window.alert(AgeAvg);
    return false;
}
function OrderNameAge(){  //Display data by name or by age 
 var OrdNameAge =(document.getElementById('Order').checked) ? "Name" : "Age";
 
    
    if (OrdNameAge.checked = "Age"){
    User_data.sort(function(a,b){
        return a[OrdNameAge] >  b[OrdNameAge];    
    });1
    Display();
    }else if(OrdNameAge.checked = "Name"){
    User_data.sort(function(a,b){
        return a[OrdNameAge] <  b[OrdNameAge];    
    });
    Display();
}

    
        return false;
    }
function TextOrder(){    //display data by age 
 var Select = document.getElementById('selectbox').value;  
 var OrderByAge = document.getElementById('OrderByAge').value; 
 var AgeOrder = 0;   
 var msg="";   


  if(Select == "Big"){
    for (x=0;x<User_data.length;x++){
        if(User_data[x].Age >= OrderByAge){
             msg +='UserName: ' + User_data[x].UserName +'<br>';
       msg +='Name: ' + User_data[x].Name + '<br>';
       var HText = "";
       for (var y = 1;y <= User_data[x].Password.length;y++){
           HText += "*";
           
       }
       msg +='Password: ' + HText + '<br>';
       msg +='Email: ' + User_data[x].Email + '<br>';
       msg +='Age:' + User_data[x].Age +'<br>';
            console.log("<=");
      
        }
    }  
}else if(Select == "Small"){
    for (x=0;x<User_data.length;x++){       
        AgeOrder = User_data[x].Age;
        console.log(AgeOrder);
        if(AgeOrder <= OrderByAge){
            msg +='UserName: ' + User_data[x].UserName +'<br>';
       msg +='Name: ' + User_data[x].Name + '<br>';
        var HText = "";
       for (var y = 1;y <= User_data[x].Password.length;y++){
           HText += "*";
          
       }
       msg +='Password: ' + HText + '<br>';
       msg +='Email: ' + User_data[x].Email + '<br>';
       msg +='Age:' + User_data[x].Age +'<br>';
             console.log("=>");     
        }
    }  
    
}
     TotalData.innerHTML = msg;
    return false;
}

// Initial setup:
function init() {
    'use strict';
    
    //Set the table using function
    document.getElementById('UserRegisterion').onsubmit = process;
    document.getElementById('AverageAge').onsubmit = AverageAge;
    document.getElementById('OrderNameAge').onsubmit = OrderNameAge;
    document.getElementById('TextOrder').onsubmit = TextOrder;
    
    
    
} // End of init() function.
window.onload = init;



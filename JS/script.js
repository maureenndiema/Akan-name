// var akan = function(cc,yy,mm,dd,g){
// var maleNames = ["Kwasi", "Kudwo" "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
// var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
// var day= ( ( (cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(mm+1)/10)) + dd )%7
// day = Math.trunc(day)
// if (g === "Male"){
//     alert(maleNames[day]);
// } else {
//     alert(femaleNames[day]);
// }
// }
//   var button = document.getElementById("submit");

// button.addEventListener("click", function(){
//     var year = document.getElementById("year").value;
//     var month = document.getElementById("month").value;
//     var day = document.getElementById("day").value;
//     var gender = document.queryselector('input[name="gender"]:checked').value;

//     var century = year.substring(0,2);
//     var pastYear = year.substring(2,4);

// button.addEventListener("click", function(){
//     century = parseInt(century);
//     year = parseInt(year)
//     partYear = parseInt(partYear)
//     month = parseInt(month);
//     day = parseInt(day);
//     akan(century, partYear, month, day, gender);

// }

function display (){
 var maleNames = ["Kwasi", "Kudwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
 var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];  
 var dateofBirth = document.getElementById("date").value;
 var male = document.getElementById("male").checked;
 var female = document.getElementById("female").checked; 
 var centuryofBirth = parseInt(dateofBirth.slice(0,2));
 var yearofBirth = parseInt(dateofBirth.slice(2,4));
 var monthofBirth = parseInt(dateofBirth.slice(5,7));
 var dayofBirth = parseInt(dateofBirth.slice(8,10));
 var day= ( ( (centuryofBirth/4) -2*centuryofBirth-1) + ((5*yearofBirth/4) ) + ((26*(monthofBirth+1)/10)) + dayofBirth)%7;
 //2022-03-12
 if(male == true){
     alert(centuryofBirth+"you have selected male");
 } elseif(female == true) 
     alert(dateofBirth+"you have selected female");   
 }



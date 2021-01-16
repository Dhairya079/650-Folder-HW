var images=[
    "Dhairya.jpg",
    "Mom.jpg",
    "Papa.jpg",
    "Dadi.jpg",
    "Dadu.jpg"          
];
var names_array=[
    "Dhairya Kedia",
    "Reenu Kedia",
    "Saurav Kumar Kedia",
    "Bina Devi Kedia",
    "Jugal Kishore Kedia"
];
var i= 0;

function next_slide(){
    console.log(i);
    document.getElementById("guyImg").src=images[i]; 
    document.getElementById("name").innerHTML=names_array[i];
    i++;  
    if(i>4){
       i=0; 
    }
};
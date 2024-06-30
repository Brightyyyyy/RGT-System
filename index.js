// let path1="https://www.google.co.in/maps/search/railway+gates+in+";
// let source=document.getElementById("source");
// let destination=document.getElementById("destination");
// let path2="+route/@17.4346832,78.4381174,13z/data=!3m1!4b1?entry=ttu"

// let final=path1+source+"+to+"+destination+path2;
// function submit(){
//     let s=document.getElementById("source").value;
//     let d=document.getElementById("destination").value;
// if(s=="hyderbad" && d=="nizambad"){
//     //Redirect to a page in the same directory
//    location.href = final;
// }
// else{

//     window.location.href ="https://www.w3schools.com/html/html_tables.asp";
// }
// }

function submit() {
    let s = document.getElementById("source").value;
    let d = document.getElementById("destination").value;
    let btn=document.getElementById("sub");
    if (s.toLowerCase() === "hyderabad" && d.toLowerCase() === "nizamabad") {
        // Redirect to a local file
        btn.href = "./gate1.html";
    } 
    else if (s.toLowerCase() === "vishakapatnam" && d.toLowerCase() === "amaravathi") {
        // Redirect to a local file
        btn.href = "./gate2.html";
    } 
   else if (s.toLowerCase() === "jammu" && d.toLowerCase() === "srinagar") {
        // Redirect to a local file
        btn.href = "./gate3.html";
    } 
    else if (s.toLowerCase() === "chennai" && d.toLowerCase() === "mumbai") {
        // Redirect to a local file
        btn.href = "./gate4.html";
    } 
    else {
        // Redirect to an external URL
        window.location.href = "no.html";
    }
}

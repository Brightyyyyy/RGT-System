function submit(){

    let u = document.getElementById("username").value;
    let p = document.getElementById("password").value;
    let btn=document.getElementById("sub");
    if (u.toLowerCase() === "lehith" && p.toLowerCase() === "123") {
        // Redirect to a local file
        btn.href = "./index.html";
    } 
    else if (u.toLowerCase() === "bhavana" && p.toLowerCase() === "456") {
        // Redirect to a local file
        btn.href = "./index.html";
    } 
    else if (u.toLowerCase() === "brighty" && p.toLowerCase() === "2030") {
        // Redirect to a local file
        btn.href = "./index.html";
    }
    else {
        // Redirect to a local file
        btn.href = "./no.html";
    }
}
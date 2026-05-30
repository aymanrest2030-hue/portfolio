/* ===== CURSOR ===== */
const cursor = document.getElementById("cursor");

let mx=0,my=0,cx=0,cy=0;

document.addEventListener("mousemove",(e)=>{
    mx=e.clientX;
    my=e.clientY;
});

function animate(){
    cx += (mx-cx)*0.15;
    cy += (my-cy)*0.15;

    cursor.style.left = cx+"px";
    cursor.style.top = cy+"px";

    requestAnimationFrame(animate);
}
animate();

/* ===== SCROLL ===== */
function scrollToSec(id){
    document.getElementById(id).scrollIntoView({behavior:"smooth"});
}

/* ===== CONTACT SYSTEM (DATABASE) ===== */
async function sendMessage(){

    let name = document.getElementById("name").value.trim();
    let reg = document.getElementById("reg").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    if(!name || !reg || !email || !message){
        alert("Please fill all fields");
        return;
    }

    const res = await fetch("/message", {
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({name, regNumber:reg, email, message})
    });

    const data = await res.json();

    if(data.status === "SUCCESS"){
        let toast = document.getElementById("toast");
        toast.style.opacity = "1";

        setTimeout(()=>{
            toast.style.opacity = "0";
        },2500);

        document.getElementById("name").value="";
        document.getElementById("reg").value="";
        document.getElementById("email").value="";
        document.getElementById("message").value="";
    }
}
// Mouse glow
const glow = document.querySelector('.cursor-glow');
document.addEventListener('mousemove', e=>{
    glow.style.left = e.clientX + 'px';
    glow.style.top = e.clientY + 'px';
});

// Typing animation
const text = "AI & Cloud Engineer";
let i = 0;
function typing(){
    if(i < text.length){
        document.querySelector(".typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typing,80);
    }
}
typing();

// Modal functions
function openModal(id){
    document.getElementById(id).style.display="flex";
}
function closeModal(id){
    document.getElementById(id).style.display="none";
}

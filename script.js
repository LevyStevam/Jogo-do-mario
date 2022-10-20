const mario = document.querySelector('.mario');
const tubo = document.querySelector('.tubo')
const jump = () =>{
    mario.classList.add('pulo');
    setTimeout(()=>{
        mario.classList.remove('pulo')
    }, 800);
}
const loop = setInterval(()=>{
    const tuboposition = tubo.offsetLeft;
    const marioposition = +window.getComputedStyle(mario).bottom.replace('px','');
    
    if (tuboposition <= 120 && tuboposition > 0 && marioposition <80 ){
        tubo.style.animation = 'none';
        tubo.style.left = `${tuboposition}px`;
        mario.style.animation = 'none';
        mario.style.bottom = `${marioposition}px`;
        mario.src = '../assets/the-rock.png';
        mario.style.width = '75px';
        mario.style.marginleft= '50px';
        clearInterval(loop);
    }
},10);
var btn = document.querySelector(".refresh");
btn.addEventListener("click", function() {
    
    location.reload();
});
document.addEventListener('keydown', jump);
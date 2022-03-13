const scrollLine = document.querySelector(".scroll-line");
const html = document.querySelector("html");

window.addEventListener("scroll",()=>{
     let winTop = window.scrollY;
     let scrollHeight = html.scrollHeight;
     let clientHeight = html.clientHeight;
     let scrolled = (winTop/(scrollHeight - clientHeight))*100;

     // adding % is imp to the width of the div
     scrollLine.style.width = `${scrolled}%`;
})
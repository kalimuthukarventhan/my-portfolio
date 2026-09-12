let button=document.querySelector(".btn");

button.addEventListener("click",function()
{
       console.log("more about me button clicked!");
       button.textContent="About Me ↓";
});
//footer
let footerText=document.querySelector("#footer-text");

let year=new Date().getFullYear();

footerText.textContent="© "+year +" Kalimuthu T. Built with HTML & CSS & JS.";

//nav bar

let navlinks=document.querySelectorAll(".nav-links a");

navlinks.forEach(function(link)
{
    link.addEventListener("click",function()
{
    navlinks.forEach(function(item)
    {
        item.classList.remove("active");
    });
    link.classList.add("active");
});
});


var typed= new Typed(".text",{
    strings: ["Fronted Developer", "Youtuber", "Web Developer"],
    typeSpeed:100,
    backSpeed:100,
    backdelay:1000,
    loop:true
})
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 50, // تنظیم فاصله از بالا
                behavior: 'smooth'
            });
        }
    });
});

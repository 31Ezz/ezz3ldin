// show menu 
const menuBtn = document.getElementById("menu");
const burger = document.getElementById("burger");
const cross = document.getElementById("cross");
const navLinks = document.getElementById("navLinks");

function closeMenu (){
         burger.classList.remove('hidden');    
         cross.classList.add('hidden');   
         navLinks.classList.remove('active');
         menuBtn.setAttribute('aria-expanded','true');
};
function openMenu(){
         burger.classList.add('hidden');    
         cross.classList.remove('hidden');   
         navLinks.classList.toggle('active');
         menuBtn.setAttribute('aria-expanded','true');
}

menuBtn.addEventListener('click', (e)=>{
        e.stopPropagation();
        navLinks.classList.contains('active')? closeMenu() : openMenu();
});






// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu if open
            
            closeMenu();
        }
    });
});

document.addEventListener('click', closeMenu);

document.addEventListener('keydown', (e)=>{
    if(e.key === 'Escape') closeMenu();
});


// ==============================
const servID  = "service_4jos9lo";   
const tempID = "template_fq27qi3"; 
const PublicKey  = "ivcryPcGJQ5Ji-2LM";     
// ==============================


emailjs.init({publicKey : PublicKey});

const form = document.getElementById('contactForm');
form.addEventListener('submit', (e) =>{
    e.preventDefault();

    //chick if there in no internet
    if(!navigator.onLine){
            showPopup("لا يوجد إتصال بالإنترنت", "error");
            return;
    };
    const templateParams = {
        name : form.name.value,
        email: form.email.value,
        message: form.message.value,
    };
    emailjs.send(servID, tempID, templateParams)
    .then(() =>{
        showPopup(" رسالتك وصلت نشكرك على إهتمامك سيتم الرد في أقرب وقت", "seccess");
        form.reset();
    })
    .catch((error) =>{
        closePopup("حدث خطأ أثناء الإرسال", "error");
        console.log(error);
    }) ;
});

// ================================================================================
// popup
const popup = document.getElementById("popup"),
      message = document.getElementById("popupMessage"),
      box = document.getElementById('popupBox');

      function showPopup(text, type){
            message.innerHTML = text;

            box.classList.remove("seccess", "error");

            if(type === "seccess"){
                box.classList.add("seccess");
                document.body.classList.add("no-click");
            } else {
                box.classList.add("error")
            };
            popup.classList.add("active");
            document.body.classList.add("no-click");

            ////////////////
            popup.style.pointerEvents = "all";
      };
      function closePopup(){
        popup.classList.remove("active");
        document.body.classList.remove("no-click");
      };

    //   =======================================================
    const scrollBtn = document.getElementById("scrollBtn");


    function handleScroll (){
        const scrollPosition = window.pageYOffset ||
                               document.documentElement.scrollTop ||
                               document.body.scrollTop || 0;

    if(scrollPosition > 200 ){
        scrollBtn.style.display = "block";
    }else{
        scrollBtn.style.display = "none";
    }};
    

    window.addEventListener("scroll",handleScroll, {passive : true});
    // handleScroll();

    function scrollToTop(){
        window.scrollTo({ 
                        top: 0,
                        behavior: "smooth"
                      });
    };















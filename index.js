document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".allskills");
    const items = Array.from(container.children);

    // Clone items for a seamless effect
    items.forEach(item => {
        const clone = item.cloneNode(true);
        container.appendChild(clone);
    });

    let scrollPosition = 0;
    const scrollSpeed = 0.9;
    let isScrolling = false;
    let isDragging = false;
    let startX;
    let scrollLeft;

    // Auto-scroll function
    function autoScroll() {
        if (!isScrolling && !isDragging) {
            scrollPosition += scrollSpeed;
            if (scrollPosition >= container.scrollWidth / 2) {
                scrollPosition = 0;
            }
            container.scrollLeft = scrollPosition;
        }
        requestAnimationFrame(autoScroll);
    }

    // Manual scroll handlers with improved sensitivity
    container.addEventListener('mousedown', (e) => {
        isDragging = true;
        isScrolling = true;
        startX = e.pageX;
        scrollLeft = container.scrollLeft;
        container.style.cursor = 'grabbing';
    });

    container.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX;
        const walk = (startX - x) * 1.5; // Increased sensitivity
        container.scrollLeft = scrollLeft + walk;
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
        setTimeout(() => {
            isScrolling = false;
        }, 100);
        container.style.cursor = 'grab';
    });

    // Prevent scroll bounce
    container.addEventListener('scroll', () => {
        if (container.scrollLeft <= 0) {
            container.scrollLeft = container.scrollWidth / 2;
        } else if (container.scrollLeft >= container.scrollWidth / 2) {
            container.scrollLeft = 0;
        }
    });

    // Touch events with improved sensitivity
    container.addEventListener('touchstart', (e) => {
        isDragging = true;
        isScrolling = true;
        startX = e.touches[0].pageX;
        scrollLeft = container.scrollLeft;
    });

    container.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        const x = e.touches[0].pageX;
        const walk = (startX - x) * 1.5; // Increased sensitivity
        container.scrollLeft = scrollLeft + walk;
    });

    container.addEventListener('touchend', () => {
        isDragging = false;
        setTimeout(() => {
            isScrolling = false;
        }, 100);
    });

    // Start auto-scroll
    autoScroll();
});

window.onload = function () {
    gsap.to(".Heading h1", { duration: 1, y: 0, opacity: 1 });
    gsap.to(".text h5", { duration: 1, delay: 0.2, y: 0, opacity: 1 });
    gsap.to(".text h2", { duration: 1, delay: 0.4, y: 0, opacity: 1 });
    gsap.to(".buttonss", { duration: 1, delay: 0.6, opacity: 1, scale: 1 });
    gsap.to(".Logo a", { duration: 1, delay: 0.8, opacity: 1, stagger: 0.2 });
    gsap.to(".dp img", { duration: 1, delay: 1, opacity: 1, scale: 1 });
    gsap.to(".mypic", { duration: 1, delay: 1, opacity: 1, scale: 1 });
};
document.addEventListener("DOMContentLoaded", () => {
    const projects = document.querySelectorAll(".prjct1");

    if (!projects.length) return; // Exit if no .prjct1 elements exist

    let lastScrollY = window.scrollY;

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                const currentScrollY = window.scrollY;
                const isScrollingDown = currentScrollY > lastScrollY;
                lastScrollY = currentScrollY;

                if (entry.isIntersecting) {
                    // Animate in when visible
                    gsap.to(entry.target, {
                        opacity: 1,
                        y: 0,
                        duration: 1,
                        ease: "power2.out",
                    });
                } else if (!isScrollingDown) {
                    // Animate out when scrolling up or exiting view
                    gsap.to(entry.target, {
                        opacity: 0,
                        y: 50,
                        duration: 1,
                        ease: "power2.in",
                    });
                }
            });
        },
        {
            threshold: 0.1,
        }
    );

    projects.forEach((project) => observer.observe(project));
});



  
document.addEventListener("DOMContentLoaded", () => {
    const inputSection = document.querySelector(".inputpages");
    const formElements = document.querySelectorAll(".names, .messagess, .btns3");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Animate in when scrolling down
                    gsap.to(entry.target, {
                        opacity: 1,
                        y: 0,
                        duration: 1,
                        ease: "power2.out",
                    });

                    // Animate form elements sequentially
                    gsap.to(formElements, {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        stagger: 0.2,
                        ease: "power2.out",
                    });
                } else {
                    // Animate out when scrolling up or out of view
                    gsap.to(entry.target, {
                        opacity: 0,
                        y: 50, // Move back down
                        duration: 1,
                        ease: "power2.out",
                    });

                    // Reverse animation for form elements
                    gsap.to(formElements, {
                        opacity: 0,
                        y: 30,
                        duration: 0.8,
                        stagger: 0.2,
                        ease: "power2.out",
                    });
                }
            });
        },
        {
            threshold: 0.2, // Trigger when 20% of the section is visible
        }
    );

    observer.observe(inputSection);
});


 function scrol(){

    a=document.querySelector('.container')
    b=document.querySelector('.navbar1')
   

    if(a.scrollTop>200){
        b.style.display="flex";
       
        
    }
    else if(a.scrollTop<30)
        {
            b.style.display="none";
           
           
        }
    }
 
    function about() {
        document.querySelector('.aboutme').scrollIntoView({
            behavior: 'smooth', // Adds a smooth scrolling effect
            block: 'end',     // Aligns the `.aboutme` section to the top of the viewport
            inline: 'nearest'   // Optional for inline alignment
        });
    }
    
    function education() {
        document.querySelector('.cards').scrollIntoView({
            behavior: 'smooth', // Adds a smooth scrolling effect
            block: 'end',     // Aligns the `.aboutme` section to the top of the viewport
            inline: 'nearest'   // Optional for inline alignment
        });
    }
    
    function home() {
        document.querySelector('.navbar').scrollIntoView({
            behavior: 'smooth', // Adds a smooth scrolling effect
            block: 'end',     // Aligns the `.aboutme` section to the top of the viewport
            inline: 'nearest'   // Optional for inline alignment
        });
    }
    
    function project() {
        document.querySelector('.prjct1').scrollIntoView({
            behavior: 'smooth', // Adds a smooth scrolling effect
            block: 'end',     // Aligns the `.aboutme` section to the top of the viewport
            inline: 'nearest'   // Optional for inline alignment
        });
    }
    
    function contact() {
        document.querySelector('.inputpages').scrollIntoView({
            behavior: 'smooth', // Adds a smooth scrolling effect
            block: 'end',     // Aligns the `.aboutme` section to the top of the viewport
            inline: 'nearest'   // Optional for inline alignment
        });
    }
    
    document.addEventListener("DOMContentLoaded", () => {
        const options = {
            root: null, // viewport
            threshold: 0.2, // 20% of the element visible
        };
    
        // Apply and remove animations on scroll
        const handleScrollAnimations = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Element enters viewport
                    entry.target.classList.add("visible");
                } else {
                    // Element exits viewport
                    entry.target.classList.remove("visible");
                }
            });
        };
    
        // Create Intersection Observer
        const observer = new IntersectionObserver(handleScrollAnimations, options);
    
        // Target sections
        const targets = document.querySelectorAll(".allskills, .Education, .aboutme");
        targets.forEach((target) => observer.observe(target));
    
        // Animate individual skills in `allskills`
        const skillsObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Skills enter viewport
                    entry.target.classList.add("skill-animate");
                } else {
                    // Skills exit viewport
                    entry.target.classList.remove("skill-animate");
                }
            });
        }, options);
    
        const skills = document.querySelectorAll(".skills");
        skills.forEach((skill) => skillsObserver.observe(skill));
    });
// function read(){
//     document.querySelector('.prjct1 h4').style.height="0px"
// }
function readMore(clicking) {
    const parent = clicking.closest(".prjct1"); 
    const isExpanded = parent.classList.contains("expanded");
  
    // Collapse all other .prjct1 elements
    document.querySelectorAll(".prjct1").forEach((card) => {
      card.classList.remove("expanded");
      const h4 = card.querySelector("h4");
      const ionIcon = card.querySelector(".ele");
      h4.innerHTML = "Read More"; // Reset text
      ionIcon.setAttribute("name", "arrow-forward-circle"); 
    });
  

    if (!isExpanded) {
      parent.classList.add("expanded");
      const h4 = clicking.querySelector("h4");
      const ionIcon = clicking.querySelector(".ele");
      h4.innerHTML = "Read Less"; 
      ionIcon.setAttribute("name", "arrow-back-circle"); 
    }
  }
  

  function viewon(title, description, ...images) {
    // Get elements
    const projectModel = document.getElementById('projectmodel');
    const projectTitle = projectModel.querySelector('.title');
    const projectDescription = projectModel.querySelector('.des');
    const projectImages = projectModel.querySelector('.imagess');
  
    // Populate the content
    projectTitle.textContent = title;
    projectDescription.textContent = description;
  
    // Clear previous images
    projectImages.innerHTML = '';
  
    // Add new images
    images.forEach(image => {
      const imgElement = document.createElement('img');
      imgElement.src = image;
      imgElement.alt = title;
      projectImages.appendChild(imgElement);
    });
  
    // Display the project model
    projectModel.style.display = 'block';
  }
function cross(){
    document.querySelector('.projectmodel').style.display="none";
}



const btn = document.getElementById('button');
const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    btn.value = 'Sending...';

    const serviceID = 'service_e96xtxg';
    const templateID = 'template_u35c52r';

    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            btn.value = 'Send Comment';
            alert('Message sent successfully!');
            form.reset(); // Clear the form fields
        }, (err) => {
            btn.value = 'Send Comment';
            alert(JSON.stringify(err));
        });
});
 function toggleNavbar(){
    document.querySelector('.sidecontent').style.display="flex"
 }
 function toggleNavbar1(){
    document.querySelector('.sidecontent').style.display="none"
 }

$(document).ready(function(){
    const commonSettings = {
        rtl: $('body').hasClass('ar'),
        nav: true,
        navText: $('body').hasClass('ar') 
        ?['<i class="br-arrowNtail-right-ic"></i>', '<i class="br-arrowNtail-left-ic"></i>']
           :['<i class="br-arrowNtail-left-ic"></i>', '<i class="br-arrowNtail-right-ic"></i>'] ,
    };
    const $bannerSlider = $(".banner-slider").owlCarousel({
        ...commonSettings,
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 6000,
        autoplaySpeed: 6000,       
        smartSpeed: 1500,         
        autoplayHoverPause: true,  
        animateIn: 'fadeIn',       
        animateOut: 'fadeOut', 
        // navText: ['<', '>'],
        nav:true,   
        dots: false,
        responsive: {
            0: { items: 1 },
            575: { items: 1 },
            767: { items: 1 },
            991: { items: 1 },
            1400: { items: 1 }
        }
    });

    var isPaused = false;
    $("#toggleSlider").click(function (e) {
        e.preventDefault();
        debugger;
        if (isPaused) {
           $bannerSlider.trigger('play.owl.autoplay' , [5000]);
            $(this).find("i").removeClass("br-user").addClass("br-hold");
        } else {
            $bannerSlider.trigger('stop.owl.autoplay', [5000]);
            $(this).find("i").removeClass("br-hold").addClass("br-user");
        }
        isPaused = !isPaused;
    });


    // $(".hold").on("click", function (e) {
    //     e.preventDefault();

  
    //     const isPlaying = $slider.data('banner-slider').settings.autoplay;
    //     if (isPlaying) {
    //     $slider.trigger('stop.owl.autoplay');
    //     $(this).find('i').removeClass('br-user').addClass('br-hold');
    //     } else {
    //     $slider.trigger('play.owl.autoplay', [5000]);
    //     $(this).find('i').removeClass('br-hold').addClass('br-user');
    //     }
    //     $slider.data('banner-sliderl').settings.autoplay = !isPlaying;
    // });
    $(".our-Services-slider").owlCarousel({
        ...commonSettings,
        items: 4,
        loop: true,
        margin: 24,
        dotsEach: Math.ceil(5 / 3), 
        nav: false,
        dots: true,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplaySpeed: 1000,       
        smartSpeed: 1500,   
        autoplayHoverPause: true,
        responsive: {
            0: { items: 1 },
            575: { items: 1 },
            767: { items: 2 },
            991: { items: 3 },
            1400: { items: 4 }
        },
  
    });
    $(".latest-news-slider").owlCarousel({
        ...commonSettings,
        items: 1, 
        loop: true, 
        dots: true,     
        dotsEach: true, 
        nav: false,
        responsive: {
            0: {
                items: 1,
            },
            575: {
                items: 1,
            },
            767: {
                items: 1,
            },
            991: {
                items: 2,
            },  
            1340:{
                items: 1,
            },
            1400: {
                items: 1,
            },
            1537: {
                items: 1,
            },
        },
    });

    $(".event-slider").owlCarousel({
        ...commonSettings,
        items: 3, 
        loop: true, 
        margin: 24,
        dots: true,     
        dotsEach: true, 
        nav: false,
        responsive: {
            0: {
                items: 1,
            },
            575: {
                items: 1,
            },
            767: {
                items: 1,
            },
            991: {
                items: 2,
            },
            1340:{
                items: 3,
            },
            1400: {
                items: 3,
            },
            1537: {
                items: 3,
            },
        },
    });


    $(".quality-numbers-slider").owlCarousel({
        ...commonSettings,
        items: 5, 
        loop: true, 
        margin:20, 
        dotsEach: Math.ceil(5 / 3), 
        dots: true,   
        nav:false,  
        autoplay: true, 
        autoplayTimeout: 2000, 
        autoplayHoverPause: true ,
        animateIn: 'fadeIn',       
        animateOut: 'fadeOut', 
        responsive: {
            0: {
                items: 1,
                center: true
            },
            575: {
                
                items: 2,
            },
            767: {
                items: 3,
                center: true
            },
            991: {
                items: 3,
                center: true
            },
            1340:{
                items: 4,
            },
            1400: {
                items: 5,
                margin:100, 
            },
            1537: {
                items: 5,
                margin:100, 
            },
        },


        
    });
    // function animateCounter(element, start, end, duration) {
    //     let range = end - start;
    //     let stepTime = Math.abs(Math.floor(duration / range));
    //     let startTime = new Date().getTime();
    //     let endTime = startTime + duration;
    //     let timer;
      
    //     function run() {
    //       let now = new Date().getTime();
    //       let remaining = Math.max((endTime - now) / duration, 0);
    //       let value = Math.round(end - (remaining * range));
          
    //       element.innerHTML = value;
      
    //       if (value === end) {
    //         clearInterval(timer);
    //         element.innerHTML = value + '+' ; 
    //       }
    //     }
      
    //     timer = setInterval(run, stepTime);
    //     run();
    // }
    // document.querySelectorAll('.counter').forEach(counter => {
    //     let startValue = parseInt(counter.getAttribute('data-start'), 10);
    //     let endValue = parseInt(counter.getAttribute('data-end'), 10);
    //     let duration = parseInt(counter.getAttribute('data-duration'), 10);
        
    //     animateCounter(counter, startValue, endValue, duration);
    // });



    // function toggleDropdown(event) {
    //     event.preventDefault();
    //     const dropdownParent = event.currentTarget.parentElement;
    //     const dropdownMenu = dropdownParent.querySelector('.dropdown-menu');
        
    //     document.querySelectorAll('.dropdown').forEach(dropdown => {
    //         if (dropdown !== dropdownParent) {
    //             dropdown.classList.remove('show');
    //             dropdown.querySelector('.dropdown-menu').classList.remove('show');
    //         }
    //     });
        
    //     dropdownParent.classList.toggle('show');
    //     dropdownMenu.classList.toggle('show');
    // }

    // document.addEventListener('click', (event) => {
    //     if (!event.target.closest('.dropdown')) {
    //         document.querySelectorAll('.dropdown').forEach(dropdown => {
    //             dropdown.classList.remove('show');
    //             dropdown.querySelector('.dropdown-menu').classList.remove('show');
    //         });
    //     }
    // });
});


// const closeMenu = document.getElementById("closeMenu");
// const menu = document.getElementById("menu");
// const burgerMenu = document.getElementById("burgerMenu");


// closeMenu.addEventListener("click", () => {
//     burgerMenu.classList.add("left-responsive");
//     closeMenu.classList.remove("left-responsive");
// });
// document.addEventListener("DOMContentLoaded", () => {
//     const menu = document.getElementById("menu");
//     const burgerMenu = document.getElementById("burgerMenu");
//     const closeMenu = document.getElementById("closeMenu");
//        debugger ;
  
//     burgerMenu.addEventListener("click", () => {
//       menu.style.opacity ="1";
//     });
  
   
//     closeMenu.addEventListener("click", () => {
//         menu.style.opacity ="0";
//     });
//   });



//   const menuItems = document.querySelectorAll('.left-menu .nav-item a, .dropdown-menu .dropdown-item');

//   menuItems.forEach((item) => {
//       item.addEventListener('click', (e) => {
//           e.preventDefault(); // منع السلوك الافتراضي

//           // استخدام scrollIntoView لجعل العنصر يظهر في الأعلى
//           item.scrollIntoView({
//               behavior: 'smooth', // حركة ناعمة
//               block: 'start', // يضع العنصر في بداية الشاشة
//           });
//       });
//   });




function animateCounter(element, start, end, duration) {
    let range = end - start;
    let stepTime = Math.abs(Math.floor(duration / range));
    let startTime = new Date().getTime();
    let endTime = startTime + duration;
    let timer;

    function run() {
        let now = new Date().getTime();
        let remaining = Math.max((endTime - now) / duration, 0);
        let value = Math.round(end - (remaining * range));

        element.innerHTML = value;

        if (value === end) {
            clearInterval(timer);
            element.innerHTML = value + '+'; 
        }
    }

    timer = setInterval(run, stepTime);
    run();
}


function startCountersOnScroll() {
    const counters = document.querySelectorAll('.counter');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // العنصر في نطاق العرض، نبدأ العد
                const counter = entry.target;
                let startValue = parseInt(counter.getAttribute('data-start'), 10);
                let endValue = parseInt(counter.getAttribute('data-end'), 10);
                let duration = parseInt(counter.getAttribute('data-duration'), 10);

                animateCounter(counter, startValue, endValue, duration);
                observer.unobserve(counter); // إيقاف المراقبة بعد بدء العد
            }
        });
    }, { threshold: 0.5 }); // تحديد أن العنصر يظهر بنسبة 50% على الأقل

    counters.forEach(counter => {
        observer.observe(counter); // مراقبة العنصر
    });
}


document.addEventListener('DOMContentLoaded', startCountersOnScroll);
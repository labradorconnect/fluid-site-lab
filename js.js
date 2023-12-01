// $(function(){
//   $(window).scroll(function() {
//      if($(window).scrollTop() >= 100) {
//        $('nav').addClass('scrolled');
//      }
//     else {
//       $('nav').removeClass('scrolled');
//     }
//   });
// });

$(document).ready(function() {
  const hamburger = $(".hamburger");
  const navlink = $(".nav-link");
  const layerWindow =$(".layer-window");

  hamburger.on("click", function() {
hamburger.toggleClass("active");
if (hamburger.hasClass("active")) {
    layerWindow.css("display", "block");
    navlink.css("height", navlink.prop("scrollHeight") + "px");
} else {
    layerWindow.css("display", "none");
    navlink.css("height", "0px");
}
  });

  layerWindow.on("click", function() {
hamburger.removeClass("active");
layerWindow.css("display", "none");
navlink.css("height", "0px");
  });
});

// Hero Section

function adjustContainerHeights() {
  let maxHeight = 0;
  const containers = document.querySelectorAll('.container');

  // Reset the height to auto to get the natural height
  containers.forEach(container => {
      container.style.height = 'auto';
  });

  // Find the tallest container
  containers.forEach(container => {
      if (container.offsetHeight > maxHeight) {
          maxHeight = container.offsetHeight;
      }
  });

  // Set all containers to the height of the tallest container
  containers.forEach(container => {
      container.style.height = `${maxHeight}px`;
  });
}


$('h1, h2, h3, h4, h5, h6, p, span').each(function(){
  var string = $(this).html();
  string = string.replace(/ ([^ ]*)$/,'&nbsp;$1');
  $(this).html(string);
});

const scrollers = document.querySelectorAll(".scroller");

// If a user hasn't opted in for recuded motion, then we add the animation
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    // add data-animated="true" to every `.scroller` on the page
    scroller.setAttribute("data-animated", true);

    // Make an array from the elements within `.scroller-inner`
    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);

    // For each item in the array, clone it
    // add aria-hidden to it
    // add it into the `.scroller-inner`
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}

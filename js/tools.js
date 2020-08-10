window.addEventListener("load", function () {
    document.querySelectorAll(".animated").forEach(function (item) {
      var delay = item.getAttribute("data-delay");
  
      if (delay == null) {
        delay = 0;
      }
  
      if (
        item.getAttribute("data-scroll") == 0 ||
        item.getAttribute("data-scroll") == null
      ) {
        setTimeout(function () {
          item.classList.add("in");
        }, delay);
      }
    });
  });
  
  window.addEventListener("scroll", function () {
    document.querySelectorAll(".animated").forEach(function (item) {
      var delay = item.getAttribute("data-delay");
  
      if (delay == null) {
        delay = 0;
      }
      if (
        item.getAttribute("data-scroll") != 0 &&
        item.getAttribute("data-scroll") != null
      ) {
        if (isElementInViewPort(item)) {
          setTimeout(function () {
            item.classList.add("in");
          }, delay);
        }
      }
    });
  });
  
  function isElementInViewPort(el) {
    var rect = el.getBoundingClientRect();
    return (
      (rect.top <= 0 && rect.bottom >= 0) ||
      (rect.bottom >=
        (window.innerHeight || document.documentElement.clientHeight) &&
        rect.top <=
          (window.innerHeight || document.documentElement.clientHeight)) ||
      (rect.top >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight))
    );
  }
  
  //************************************** */
  //Add mutate class when the user scrolls
  //************************************** */
  window.addEventListener("scroll", function () {
    var scrollIndex = window.scrollY;
    if (scrollIndex != 0) {
      document.querySelectorAll(".will-mutate").forEach(function (item) {
        item.classList.add("mutate");
  
        setTimeout(function () {
          item.classList.add("mutated");
        }, 500);
      });
    } else {
      document.querySelectorAll(".will-mutate").forEach(function (item) {
        item.classList.remove("mutate");
        item.classList.remove("mutated");
  
        setTimeout(function () {
          item.classList.remove("mutated");
        }, 500);
      });
    }
  });
  
  //******************************* */
  //  Move elelemnts with mouve */
  //******************************* */
  let lFollowX = 0,
    lFollowY = 0,
    x = 0,
    y = 0,
    friction = 1 / 30;
  
  let translate, tranlateInv;
  
  function moveOnHover() {
    x += (lFollowX - x) * friction;
    y += (lFollowY - y) * friction;
  
    translate = `translate(${x}px, ${y}px)`;
    translateInv = `translate(${x * -1}px, ${y * -1}px)`;
  
    if (window.innerWidth >= 992) {
      document.querySelectorAll(".move").forEach(function (item) {
        item.style.transform = translate;
      });
  
      document.querySelectorAll(".move-inv").forEach(function (item) {
        item.style.transform = translateInv;
      });
    }
  }
  
  window.addEventListener("mousemove", function (e) {
    let lMouseX = Math.max(
      -100,
      Math.min(100, $(window).width() / 2 - e.clientX)
    );
    let lMouseY = Math.max(
      -100,
      Math.min(100, $(window).height() / 2 - e.clientY)
    );
  
    lFollowX = (-7 * lMouseX) / 100;
    lFollowY = (-7 * lMouseY) / 100;
  
    moveOnHover();
  });
  
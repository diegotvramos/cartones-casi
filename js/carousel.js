
const d = document;

export default function slider() {

    //Capturando elementos del DOM
    const $nextBtn = d.querySelector(".slider-btns .next"),
          $prevBtn = d.querySelector(".slider-btns .prev"),
          $slides = d.querySelectorAll(".slider-slide");

    let i = 0;
    let interval;

    const changeSlide = (direction) => {
        $slides[i].classList.remove("active");
        i = (i + direction + $slides.length) % $slides.length;
        $slides[i].classList.add("active");
    };

    const startInterval = () => {
        interval = setInterval(() => {
            changeSlide(1);
        }, 5000);
    };

    const resetInterval = () => {
        clearInterval(interval);
        startInterval();
    };

    //Evento Click
    d.addEventListener("click", (e) => {
        if (e.target === $prevBtn) {
            e.preventDefault();
            changeSlide(-1);
            resetInterval();
        }
        if (e.target === $nextBtn) {
            e.preventDefault();
            changeSlide(1);
            resetInterval();
        }
    });

    startInterval();
}





// const d = document;

// export default function slider() {

//     const $nextBtn = d.querySelector(".slider-btns .next"),
//           $prevBtn = d.querySelector(".slider-btns .prev"),
//           $slides = d.querySelectorAll(".slider-slide");

//     let i = 0;

//     const changeSlide = (direction) => {
//         $slides[i].classList.remove("active");
//         i = (i + direction + $slides.length) % $slides.length;
//         $slides[i].classList.add("active");
//     };

//     d.addEventListener("click", (e) => {
//         if (e.target === $prevBtn) {
//             e.preventDefault();
//             changeSlide(-1);
//         }
//         if (e.target === $nextBtn) {
//             e.preventDefault();
//             changeSlide(1);
//         }
//     });

//     setInterval(() => {
//         changeSlide(1);
//     }, 3000);
// }



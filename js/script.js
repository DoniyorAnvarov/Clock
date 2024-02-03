let h = document.querySelector('.h')
let m = document.querySelector('.m')
let s = document.querySelector('.s')

let hours = document.querySelector('.hours')
let minutes = document.querySelector('.minutes')

let x = 0

// function rec() {

// console.log(x);

// x++;
// let y = setTimeout(() => {
//   rec()
// }, 100);
// if (x == 10) {
//   clearTimeout(y)
// }

// }

// rec()

function clock() {

    const time = new Date;

    let hourArrow = time.getHours()
    let minArrow = time.getMinutes()
    let secArrow = time.getSeconds()

    h.style.transform = `rotate(${hourArrow * 30}deg)`
    m.style.transform = `rotate(${minArrow * 6}deg)`
    s.style.transform = `rotate(${secArrow * 6}deg)`

    setTimeout(() => {

        clock()

    }, 1000);

    hours.innerHTML = hourArrow < 10 ? "0" + hourArrow : hourArrow
    minutes.innerHTML = minArrow < 10 ? "0" + minArrow : minArrow

}

clock()

let tabsItem = document.querySelectorAll('.tabsItem')
let tabsContentItem = document.querySelectorAll('.tabsContentItem')

for (let i = 0; i < tabsItem.length; i++) {

    tabsItem[i].addEventListener('click', function () {

        for (let k = 0; k < tabsItem.length; k++) {
            tabsItem[k].classList.remove('active')
            tabsContentItem[k].classList.remove('active')
        }

        tabsItem[i].classList.add('active')
        tabsContentItem[i].classList.add('active')

    })

}

let topwatch__hours = document.querySelector('.stopwatch__hours')
let topwatch__minutes = document.querySelector('.stopwatch__minutes')
let topwatch__seconds = document.querySelector('.stopwatch__seconds')
let stopwatch__btn = document.querySelector('.stopwatch__btn')
let tabsLink__span = document.querySelector('.tabsLink__span')

let interval;
stopwatch__btn.addEventListener('click', function () {
    
    if (this.innerHTML.toLowerCase() == 'start') {
        this.innerHTML = 'stop';
        interval = setInterval(rec, 1000);
        tabsLink__span.classList.add('active')
    } else if (this.innerHTML == 'stop') {
        clearInterval(interval);
        this.innerHTML = 'clear'
        tabsLink__span.classList.remove('active')
        tabsLink__span.classList.add('active_clear')
    } else {
        this.innerHTML = 'start'
        tabsLink__span.classList.remove('active_clear')
        topwatch__hours.innerHTML = 0;
        topwatch__minutes.innerHTML = 0;
        topwatch__seconds.innerHTML = 0; 
    }
})

function rec() {
    topwatch__seconds.innerHTML++
    if (topwatch__seconds.innerHTML > 59) {
        topwatch__seconds.innerHTML = 0;
        topwatch__minutes.innerHTML++;
        if (topwatch__minutes.innerHTML > 59) {
            topwatch__minutes.innerHTML = 0;
            topwatch__hours.innerHTML++;
        }
    }
}
// let clicked = false;

 // if (!clicked) {
    // clicked = true;
 // }
 
// topwatch__seconds.innerHTML = Number(topwatch__seconds.innerHTML) + 1;

    // setTimeout(() => {
    //     rec();
    // }, 100);
    
    // topwatch__minutes.innerHTML = Number(topwatch__minutes.innerHTML) + 1
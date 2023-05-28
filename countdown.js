const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  
  const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  let tempDate = new Date();
  let tempYear= tempDate.getFullYear();
  let tempMonth = tempDate.getMonth();
  let tempDay = tempDate.getDate();


const futureDate = new Date(tempYear,tempMonth, tempDay+24, 22,22,0 )

     //종강 날짜
let year=futureDate.getFullYear();
let month = months[ futureDate.getMonth()];
let weekday=weekdays[futureDate.getDay()]; 
let date = futureDate.getDate();
let hours=futureDate.getHours();
let minutes=futureDate.getMinutes();

let lastday = document.querySelector('.lastday');
const items = document.querySelectorAll('.deadline-format h4');
const message = document.querySelector('.deadline');

lastday.textContent = `End of Class: ${weekday}, ${date} ${month} ${year} ${hours} : ${minutes}`;

let futureTime = futureDate.getTime();

function getRemainingTime(){

    let today = new Date().getTime();
    let t=futureTime-today;//미래와 현재의 차이를 밀리초로

    const oneDay = 60 * 60 * 24 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;

    let days = Math.floor(t / oneDay);
    let hours = Math.floor((t % oneDay) / oneHour);
    let minutes = Math.floor((t % oneHour) / oneMinute);
    let seconds = Math.floor((t % oneMinute) / 1000);

console.log(days, hours, minutes, seconds);

function format(item) {
    if (item < 10) {
        return `0${item}`;
      }
      return item.toString();
}

//화면에 보이는 4 숫자 가지는 배열
    let arr = [days,hours,minutes, seconds ];

    //4개의 아이템들 돌면서 아이템
    items.forEach((item, index)=>{
        item.innerHTML = format(arr[index]);})


//t가 0보다 작으면 종강입니다. 축하합니다. 메시지
if(t < 0){
    clearInterval(countdown);
    message.innerHTML = `<h4 class="end">종강 축하드려요!</h4>`;
  }
}

let countdown = setInterval(getRemainingTime, 1000);

getRemainingTime();



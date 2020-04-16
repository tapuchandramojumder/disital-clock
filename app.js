function digitalClock() {
  let date = new Date(); //Bangladesh Standard Time
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let second = date.getSeconds();

  let year = date.getFullYear();
  let month = date.getMonth();
  let day = date.getDate();

  let timeFormate = 'AM';

  month = month + 1;

  if (hours === 0) {
    hours = 12;
  }
  if (hours > 12) {
    hours = hours - 12;
    timeFormate = 'PM';
  }
  //ternary method
  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  second = second < 10 ? '0' + second : second;
  month = month < 10 ? '0' + month : month;
  day = day < 10 ? '0' + day : day;
  //javascript template
  let finalTime = `${hours} :${minutes} : ${second}`;
  let finalDate = `${day} .${month} . ${year}`;

  document.getElementById('time').innerText = finalTime;
  document.querySelector('small').innerText = timeFormate;
  document.querySelector('span').innerText = finalDate;

  setInterval(digitalClock, 1000);
}
digitalClock();

const dateDayElement = document?.getElementById("date-day-container");
const hourElement = document?.getElementById("hour-data");
const minuteElement = document?.getElementById("minute-data");
const secondElement = document?.getElementById("second-data");

const weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const getClockData = () => {
  const today = new Date();

  const date = today?.getDate();
  const month = months[today?.getMonth()];
  const year = today?.getFullYear();
  const weekDay = weekDays[today?.getDay()];
  const hour = today?.getHours();
  const minute = today?.getMinutes();
  const second = today?.getSeconds();

  dateDayElement.innerText = `${date} ${month} ${year}, ${weekDay}`;
  hourElement.innerText = hour;
  minuteElement.innerText = minute;
  secondElement.innerText = second;
};

setInterval(() => {
  getClockData();
}, 1000);

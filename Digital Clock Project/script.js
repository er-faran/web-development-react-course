const dateDayElement = document.getElementById("date-day-container");
const hourElement = document.getElementById("hour-container");
const minuteElement = document.getElementById("minute-container");
const secondElement = document.getElementById("second-container");

const getClockData = () => {
  const date = new Date();
  const todayDate = date.toLocaleString("default", { day: "numeric" });
  const weekDay = date.toLocaleString("default", { weekday: "long" });
  const year = date.toLocaleString("default", { year: "numeric" });
  const month = date.toLocaleString("default", { month: "long" });
  const hour = date.toLocaleString("default", { hour: "numeric" });
  const minute = date.toLocaleString("default", { minute: "numeric" });
  const second = date.toLocaleString("default", { second: "numeric" });

  dateDayElement.innerText = `${todayDate} ${month} ${year}, ${weekDay}`;
  hourElement.innerText = Number(hour) < 10 ? "0" + Number(hour) : Number(hour);
  minuteElement.innerText = Number(minute)?.toLocaleString("en-US", {
    minimumIntegerDigits: 2,
  });
  secondElement.innerText =
    Number(second) < 10 ? "0" + Number(second) : Number(second);
};

setInterval(() => {
  getClockData();
}, 1000);

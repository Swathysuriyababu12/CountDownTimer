// const getNewYear = () => {
//   const currentYear = new Date().getFullYear();
//   return new Date(`January 01 ${currentYear + 1} 00:00:00`);
// };

// // update the year element
// const year = document.querySelector(".year");
// year.innerHTML = getNewYear().getFullYear();

// // select elements
const app = document.querySelector(".event-container");
// // const message = document.querySelector(".message");
// // const heading = document.querySelector("h1");
const form = document.querySelector("#signup");
var eventName = "";
var time = 0;
var array = [];
var neww;
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  for (const pair of formData.entries()) {
    array.push(pair);
  }
  neww = array.flat();
  //console.log(neww);
  console.log(neww);
  eventName = neww[1];

  const countdownTimer = new CountDown(new Date(neww[3]), render, complete);
});
//document.body.appendChild(form);
//form.submit();
const render = (time) => {
  app.innerHTML = `
         
      <div class="event">
        <h2 class="event_title"></h2>
        <div class="event_countdown">
          <div class="event_item">
            <p class="event_title_title" id="day_title">${time.days}</p>
            <p class="day_name">DAYS</p>
          </div>
          <div class="event_item">
            <p class="event_title_title" id="hour_title">${time.hours}</p>
            <p class="hour_name">HOURS</p>
          </div>
          <div class="event_item">
            <p class="event_title_title" id="minute_title">${time.minutes}</p>
            <p class="minute_name">MINUTES</p>
          </div>
          <div class="event_item">
            <p class="event_title_title" id="seconds_title">${time.seconds}</p>
            <p class="seconds_name">SECONDS</p>
          </div>
        </div>
      </div> `;
};

const showMessage = () => {
  const message = document.querySelector(".event_title");
  message.innerHTML = `Happy ${eventName}`;
};

// const hideMessage = () => {
//   message.innerHTML = "";
//   heading.style.display = "block";
// };

const complete = () => {
  showMessage();

  // restart the countdown after showing the
  // greeting message for a day ()
};

function callpage() {
  const calender = document.querySelector(".container");

  calender.remove();
}

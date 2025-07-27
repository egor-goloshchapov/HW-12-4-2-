(function () {
  const timerElement = document.querySelector('#timer-1');
  if (!timerElement) return;

  const refs = {
    days: timerElement.querySelector('[data-value="days"]'),
    hours: timerElement.querySelector('[data-value="hours"]'),
    mins: timerElement.querySelector('[data-value="mins"]'),
    secs: timerElement.querySelector('[data-value="secs"]'),
  };
  
  const targetDate = new Date('Jul 17, 2026').getTime();

  const timerId = setInterval(() => {
    const currentTime = Date.now();
    const time = targetDate - currentTime;

    if (time <= 0) {
      clearInterval(timerId);
      updateClock({ days: 0, hours: '00', mins: '00', secs: '00' });
      alert('Таймер завершився!');
      return;
    }

    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((time % (1000 * 60)) / 1000);

    updateClock({
      days,
      hours: pad(hours),
      mins: pad(mins),
      secs: pad(secs),
    });
  }, 1000);

  function updateClock({ days, hours, mins, secs }) {
    refs.days.textContent = days;
    refs.hours.textContent = hours;
    refs.mins.textContent = mins;
    refs.secs.textContent = secs;
  }

  function pad(value) {
    return String(value).padStart(2, '0');
  }
})();

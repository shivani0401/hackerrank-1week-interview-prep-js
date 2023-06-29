function timeConversion(s) {
    const isPM = s.includes('PM');
  const timeArr = s.slice(0, 8).split(':');

  let hours = Number(timeArr[0]);
  const minutes = Number(timeArr[1]);
  const seconds = Number(timeArr[2]);

  if (isPM && hours !== 12) {
    hours += 12;
  } else if (!isPM && hours === 12) {
    hours = 0;
  }

  const formattedHours = String(hours).padStart(2, '0');
  const formattedTime = `${formattedHours}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

  return formattedTime;
}
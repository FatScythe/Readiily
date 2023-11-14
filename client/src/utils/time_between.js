function time_between(date1, date2 = new Date()) {
  // The number of milliseconds in one day/ week/ hour
  const ONE_WEEK = 1000 * 60 * 60 * 24 * 7;
  const ONE_DAY = 1000 * 60 * 60 * 24;
  const ONE_HOUR = 1000 * 60 * 60;

  // Calculate the difference in milliseconds
  let differenceMs = Math.abs(date1 - date2);
  // Convert back to days/ hours/ week and return
  let day = Math.round(differenceMs / ONE_DAY);
  let deadline = day + " day" + (day > 1 ? "s" : "");

  if (day === 0) {
    let hour = Math.round(differenceMs / ONE_HOUR);
    deadline = hour + " hour" + (hour > 1 ? "s" : "");
  }
  if (day >= 7) {
    let week = Math.round(differenceMs / ONE_WEEK);
    deadline = week + " week" + (week > 1 ? "s" : "");
  }
  return deadline;
}

export default time_between;

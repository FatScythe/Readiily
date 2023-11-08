import dayjs from "dayjs";

export const generateDate = (
  month = dayjs().month(),
  year = dayjs().year()
) => {
  const firstDateOfMonth = dayjs().year(year).month(month).startOf("month");
  const lastDateOfMonth = dayjs().year(year).month(month).endOf("month");

  const arrayOfDate = [];
  // Preceding Dates of Month
  for (let i = 0; i < firstDateOfMonth.day(); i++) {
    arrayOfDate.push({
      date: firstDateOfMonth.day(i),
      isCurrentMonth: false,
      today: false,
      isAfter: false,
    });
  }

  // Current Dates of Month
  for (let i = firstDateOfMonth.date(); i <= lastDateOfMonth.date(); i++) {
    arrayOfDate.push({
      date: firstDateOfMonth.date(i),
      isCurrentMonth: true,
      // today:
      //   firstDateOfMonth.date(i).toDate().toDateString() ===
      //   dayjs().toDate().toDateString(),
      today: firstDateOfMonth
        .date(i)
        .isSame(dayjs().toDate().toDateString(), "day"),
      isAfter: firstDateOfMonth.date(i).$D > dayjs().$D,
    });
  }

  // Proceding Dates of Month
  const remainingDate = 42 - arrayOfDate.length;

  for (
    let i = lastDateOfMonth.date() + 1;
    i <= lastDateOfMonth.date() + remainingDate;
    i++
  ) {
    arrayOfDate.push({
      date: lastDateOfMonth.date(i),
      isCurrentMonth: false,
      today: false,
      isAfter: true,
    });
  }

  return arrayOfDate;
};

export const days = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
];

export const months = [
  "january",
  "february",
  "march",
  "april",
  "may",
  "june",
  "july",
  "august",
  "september",
  "october",
  "november",
  "december",
];

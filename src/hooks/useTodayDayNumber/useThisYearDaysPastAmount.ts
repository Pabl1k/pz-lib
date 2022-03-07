/**
 * Hook returns today's amount of the days from the start of the year
 */
const UseThisYearDaysPastAmount = (): number => {
  const year: number = new Date().getFullYear();
  const month: number = new Date().getMonth(); // 0 to 11
  const day: number = new Date().getDate();

  /**
   * If today is January
   */
  if (month < 1) return day;

  /**
   * checking if the current year is a leap year
   */
  const february: 28 | 29 = (
    year % 100 === 0 ? year % 400 === 0 : year % 4 === 0
  )
    ? 29
    : 28;

  const daysInMonth = [31, february, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let previousMonthsAmount: number = 0;

  for (let i = 0; i < month; i++) {
    previousMonthsAmount += daysInMonth[i];
  }
  return previousMonthsAmount + day;
};

export default UseThisYearDaysPastAmount;

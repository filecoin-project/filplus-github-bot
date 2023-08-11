// build an object with properties as the previous 14 days
// and values as the number of events for that day
const TWO_WEEKS_IN_MILLISECONDS = 12096e5;

export const buildPastTwoWeeks = (from = new Date()): string[] => {
  const res = [];
  const fromTimestamp = from.getTime();
  const twoWeeksAgo = new Date(
    fromTimestamp - TWO_WEEKS_IN_MILLISECONDS
  );
  const twoWeeksAgoTimestamp = twoWeeksAgo.getTime();
  const days = Math.round(
    (fromTimestamp - twoWeeksAgoTimestamp) / 86400000
  );
  for (let i = 1; i <= days; i++) {
    const date = new Date(
      twoWeeksAgoTimestamp + i * 86400000
    ).toLocaleDateString("en-US", {
      month: "2-digit",
      day: "2-digit",
    });
    res.push(date);
  }
  return res;
};


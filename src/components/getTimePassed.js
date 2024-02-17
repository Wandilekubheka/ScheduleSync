export const timePassed = (start, now) => {
  return now.subtract(start).format("HH:MM");
};

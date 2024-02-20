export const convertTime = (minutes) => {
  if (typeof minutes !== "number" || minutes < 0) {
    return "Некорректные данные";
  }

  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;

  if (hours > 0) {
    return `${hours} ч. ${remainingMinutes} мин.`;
  } else {
    return `${remainingMinutes} мин.`;
  }
};

export const addSumTimes = (start, minutesToAdd) => {
  const start1 = new Date(start);
  start1.setMinutes(start1.getMinutes() + minutesToAdd);

  // Получаем смещение текущего часового пояса в минутах
  const timezoneOffset = start1.getTimezoneOffset();

  // Корректируем время с учетом часового пояса
  start1.setMinutes(start1.getMinutes() - timezoneOffset);

  const formattedTime = start1.toISOString().slice(0, 19).replace('T', ' ');

  return formattedTime;
};

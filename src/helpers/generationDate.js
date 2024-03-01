export const generationDate = (offsetDays, startHour, endHour) => {
  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + offsetDays);

  const formattedDate = currentDate.toISOString().split("T")[0];
  const currentDateTime = currentDate.getTime();

  const timeList = [];

  for (let hour = startHour; hour <= endHour; hour++) {
    for (let minute of [0, 30]) {
      const timeString = `${formattedDate} ${hour
        .toString()
        .padStart(2, "0")}:${minute.toString().padStart(2, "0")}:00.000`;

      // Проверка, прошло ли уже время
      const dateTime = new Date(timeString).getTime();
      if (dateTime > currentDateTime) {
        const id = 80 - (hour - 9) * 2 - (minute === 30 ? 1 : 0);

        timeList.push({
          id,
          time: `${hour.toString().padStart(2, "0")}:${minute
            .toString()
            .padStart(2, "0")}`,
          check: false,
          time1: timeString,
        });
      }
    }
  }

  return timeList;
};

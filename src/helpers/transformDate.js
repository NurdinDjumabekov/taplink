export const transformDate = (dateString) => {
  //// 1970-01-01T15:00:00.000Z ===> 15:00
  const date = new Date(dateString);
  const options = {
    timeZone: "UTC",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  };
  // console.log({ time: date.toLocaleTimeString("en-US", options), date: date });
  return date.toLocaleTimeString("en-US", options);
};

export const formatDateTime = (dateString) => {
  ///// Thu Jul 11 2024 15:09:22 GMT+0600 (Киргизия) ===> 2024-07-11
  const date = new Date(dateString);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Месяцы в JavaScript начинаются с 0
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};

export const addMinutesToTime = (time, minutesToAdd) => {
  // 10:50 + 70 = 12:00
  const [hours, minutes] = time.split(":").map(Number);
  let totalMinutes = hours * 60 + minutes + minutesToAdd;
  const newHours = Math.floor(totalMinutes / 60);
  const newMinutes = totalMinutes % 60;
  const formattedHours = String(newHours).padStart(2, "0");
  const formattedMinutes = String(newMinutes).padStart(2, "0");

  return `${formattedHours}:${formattedMinutes}`;
};

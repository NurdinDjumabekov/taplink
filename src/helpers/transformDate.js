export const transformDate = (dateString) => {
  //// 1970-01-01T15:00:00.000Z ===> 15:00
  const date = new Date(dateString);
  const options = {
    timeZone: "UTC",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  };
  return date.toLocaleTimeString("en-US", options);
};

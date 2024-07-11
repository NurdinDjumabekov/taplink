export const dateFormat = (inputDateTime, type) => {
  const dateObject = new Date(inputDateTime);

  const formattedTime = dateObject.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
  });

  const day = dateObject.getDate().toString().padStart(2, "0");
  const month = (dateObject.getMonth() + 1).toString().padStart(2, "0");
  const formattedDate = `${day}.${month}.${dateObject.getFullYear()}`;

  return type === "time" ? formattedTime : formattedDate;
};

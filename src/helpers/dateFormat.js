export const dateFormat = (inputDateTime, type) => {
  const dateObject = new Date(inputDateTime);

  const formattedTime = dateObject.toLocaleTimeString('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
  });

  const formattedDate = `${dateObject.getDate()}.${
    dateObject.getMonth() + 1
  }.${dateObject.getFullYear()}`;

  return type === 'time' ? formattedTime : formattedDate;
};

export const formatDateTime = (dateTimeString) => {
  const dateTime = new Date(dateTimeString);

  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  };

  const formattedDateTime = new Intl.DateTimeFormat("en-US", options).format(
    dateTime
  );
  return formattedDateTime;
};

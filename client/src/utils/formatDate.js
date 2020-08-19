export const formatDate = (date) =>
  date.toLocaleDateString(undefined, { day: "numeric", month: "long" });

  
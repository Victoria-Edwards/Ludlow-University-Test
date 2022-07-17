export const todaysDate = () => {
  return `${new Date().toISOString().split("T")[0]}T00:00:00`;
};

export const getDate = () => {
  const date = new Date();

  return `${date.getUTCDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
};

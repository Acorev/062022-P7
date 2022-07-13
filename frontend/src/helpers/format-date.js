const formatDate = (dates) => {
  const date = new Date(dates)
  return `
    ${date.getDate()}/
    ${date.getMonth() + 1}/
    ${date.getFullYear()}\u00a0\u00a0\u00a0
    ${date.getHours()}:
    ${date.getMinutes()}
    `;
};

export default formatDate;
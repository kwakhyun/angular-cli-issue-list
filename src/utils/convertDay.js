const convertDay = createdAt => {
  let newDate = new Date(createdAt).toLocaleDateString();
  newDate = newDate.split('.');
  newDate = `${newDate[0]}년 ${newDate[1]}월 ${newDate[2]}일`;
  return newDate;
};

export default convertDay;

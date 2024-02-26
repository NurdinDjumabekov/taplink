export const transformTextConfim = (arr) => {
  const obj = arr?.[0];
  const text = `Здравствуйте, ${obj?.fio_patient}! \n
  Ваш мастер: ${obj?.fio_doctor}, \n
  вы выбрали: ${obj?.name_department}, \n
  время и дата : ${obj?.date_to} - ${obj?.date_from}, \n
  филиал : ${obj?.name_filial}
  
  `;
  return arr?.length === 0 ? "У вас нет заказов!" : text;
};

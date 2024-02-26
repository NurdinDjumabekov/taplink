export const transformNumber = (num) => {
  const transformedNumber = "996" + num?.replace(/[-()]/g, "")?.slice(-9);
  return transformedNumber;
};

export const renderStars = (rating, link) => {
  const stars = [];
  for (let i = 0; i < rating; i++) {
    stars.push(<img key={i} src={link} alt="star" />);
  }
  return stars;
};

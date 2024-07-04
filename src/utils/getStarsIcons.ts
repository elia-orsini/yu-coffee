const getStarsIcons = (rating: number): string => {
  switch (rating) {
    case 0.5:
      return "½";
    case 1:
      return "★";
    case 1.5:
      return "★½";
    case 2:
      return "★★";
    case 2.5:
      return "★★½";
    case 3:
      return "★★★";
    case 3.5:
      return "★★★½";
    case 4:
      return "★★★★";
    case 4.5:
      return "★★★★½";
    case 5:
      return "★★★★★";
    default:
      return "";
  }
};

export default getStarsIcons;

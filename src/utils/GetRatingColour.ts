export default function getRatingColour(stars: number): string {
  let returnColour = "";

  switch (stars) {
    case 1:
      returnColour = "#dc2626";
      break;

    case 2:
      returnColour = "#ea580c";
      break;

    case 3:
      returnColour = "#84cc16";
      break;

    case 4:
      returnColour = "#10b981";
      break;

    case 5:
      returnColour = "#0ea5e9";
      break;

    default:
      break;
  }

  return returnColour;
}

import Blue from "../assets/icons/wallets/Blue.svg";
import Green from "../assets/icons/wallets/Green.svg";
import LightBlue from "../assets/icons/wallets/LightBlue.svg";
import Neutral from "../assets/icons/wallets/Neutral.svg";
import Red from "../assets/icons/wallets/Red.svg";
import Yellow from "../assets/icons/wallets/Yellow.svg";

export function wallet(type) {
  let selectedType;
  switch (type) {
    case "Blue":
      selectedType = Blue;
      break;
    case "Green":
      selectedType = Green;
      break;
    case "LigtBlue":
      selectedType = LightBlue;
      break;
    case "Neutral":
      selectedType = Neutral;
      break;
    case "Red":
      selectedType = Red;
      break;
    case "Yellow":
      selectedType = Yellow;
      break;
    default:
      break;
  }

  return selectedType;
}

export const arrayWallet = [
  {
    id: "Blue",
    icon: Blue
  },
  {
    id: "Green",
    icon: Green
  },
  {
    id: "LigtBlue",
    icon: LightBlue
  },
  {
    id: "Neutral",
    icon: Neutral
  },
  {
    id: "Red",
    icon: Red
  },
  {
    id: "Yellow",
    icon: Yellow
  }
];

import { Vibration } from "react-native";

const Helper = async () => {

  const ONE_SECOND_IN_MS = 1000;

  return (
    Vibration.vibrate(ONE_SECOND_IN_MS)
  );
}
export default Helper;


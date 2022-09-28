import React from "react";
import { Button, Platform, Text, Vibration } from "react-native";

const Helper = async () => {

  const ONE_SECOND_IN_MS = 1000;
  console.log("Entró al helper")
  
  return (

    Vibration.vibrate(ONE_SECOND_IN_MS)
    
  );
}
export default Helper;


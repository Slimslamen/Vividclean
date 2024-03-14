import React from "react";
import Lottie from "lottie-react";
import Cleaninglady from "../../lottie.json";

export default function Loading() {
  return (
    <Lottie animationData={Cleaninglady} loop={true} style={{height:"500px"}}/>
  )
}

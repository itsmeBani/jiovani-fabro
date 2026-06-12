
import Lottie from "lottie-react";
import party from "../assets/lottie/splash.json";
function SuccessAnimation() {
  return (
    <Lottie  animationData={party} className={"pointer-events-none h-[300px] absolute w-[300px]"} loop={true} />

  )
}

export default SuccessAnimation
import React, { useEffect, useState } from "react";
import { useStateContext } from "../Context";

//images
import Clear from "../assets/images/Clear.jpg";
import Fog from "../assets/images/fog.png";
import Cloudy from "../assets/images/Cloudy.jpg";
import Rainy from "../assets/images/Rainy.jpg";
import Snow from "../assets/images/Snow.jpg";
import Stormy from "../assets/images/Stormy.jpg";
import Sunny from "../assets/images/Sunny.jpg";

const BackgroundLayout = () => {
  const { weather } = useStateContext();
  const [image, setImage] = useState(Clear);

  useEffect(() => {
    if (weather.conditions) {
      let imageString = weather.conditions;
      if (imageString.toLowerCase().includes("Clear")) {
        setImage(Clear);
      } else if (imageString.toLowerCase().includes("cloud")) {
        setImage(Cloudy);
      } else if (
        imageString.toLowerCase().includes("Rain") ||
        imageString.toLowerCase().includes("shower")
      ) {
        setImage(Rainy);
      } else if (imageString.toLowerCase().includes("Snow")) {
        setImage(Snow);
      } else if (imageString.toLowerCase().includes("Fog")) {
        setImage(Fog);
      } else if (
        imageString.toLowerCase().includes("Thunder") ||
        imageString.toLowerCase().includes("storm")
      ) {
        setImage(Stormy);
      }
    }
  }, [weather]);

  return (
    <img
      src={image}
      alt="weather_image"
      className="h-screen w-full fixed left-0 top-0 -z-[10]"
    />
  );
};

export default BackgroundLayout;

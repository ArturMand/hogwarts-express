import React from "react";
import { Box } from "@chakra-ui/react";
import { HouseGradientBoxProps } from "./type";
import colorName from "color-name";

const HouseGradientBox: React.FC<HouseGradientBoxProps> = ({ colors }) => {
  const getRGB = (color: string) => {
    const colors = color.split(" and ");
    const rgbColors = [];

    for (let i = 0; i < colors.length; i++) {
      const rgbColor = colorName[colors[i].toLowerCase()];

      if (!rgbColor) {
        return "rgb(255,255,255) 0% , rgb(0,0,0) 100%";
      } else {
        rgbColors.push(rgbColor.join());
      }
    }
    return `rgb(${rgbColors[0]}) 0% , rgb(${rgbColors[1]}) 100%`;
  };

  return (
    <Box
      borderRadius={4}
      w="100%"
      h="20px"
      bg={`linear-gradient(to right,${getRGB(colors)})`}
    />
  );
};

export default HouseGradientBox;

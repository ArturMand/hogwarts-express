import React from "react";
import { HouseListProps } from "./type";
import { List } from "@chakra-ui/react";
import HouseListItem from "../HouseListItem";

const HouseList: React.FC<HouseListProps> = ({ houses }) => {
  return (
    <List display="flex" gap={4} flexDirection="column" w="400px">
      {houses?.map((house) => (
        <HouseListItem house={house} />
      ))}
    </List>
  );
};

export default HouseList;

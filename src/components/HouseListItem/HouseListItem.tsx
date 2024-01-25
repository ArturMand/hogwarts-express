import { Flex, ListItem, Text } from "@chakra-ui/react";
import React from "react";
import HouseGradientBox from "../HouseGradientBox";
import { HouseListItemProps } from "./type";

const HouseListItem: React.FC<HouseListItemProps> = ({ house }) => {
  return (
    <ListItem
      key={house.id}
      p={4}
      borderRadius={12}
      border="1px"
      borderColor="gray.200"
      boxShadow="base"
      gap={4}
      display="flex"
      flexDirection="column"
    >
      <Flex justifyContent="space-between" alignItems="center">
        <Text fontWeight={700} fontSize="24px">
          {house.name}
        </Text>
        <Text>{house.animal}</Text>
      </Flex>

      <HouseGradientBox colors={house.houseColours} />

      <Text fontWeight={700}>
        <Text as="span" fontWeight={400}>
          Founder:{" "}
        </Text>
        {house.founder}
      </Text>
    </ListItem>
  );
};

export default HouseListItem;

import React from "react";
import { HouseListProps } from "./type";
import { Flex, List, ListItem, Text } from "@chakra-ui/react";
import HouseGradientBox from "../HouseGradientBox";

const HouseList: React.FC<HouseListProps> = ({ houses }) => {
  return (
    <List display="flex" gap={4} flexDirection="column" w="400px">
      {houses?.map((house) => (
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
      ))}
    </List>
  );
};

export default HouseList;

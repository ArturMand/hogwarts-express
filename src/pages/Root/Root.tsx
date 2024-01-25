import { useEffect, useState } from "react";
import HouseList from "../../components/HouseList";
import { hogwartsApis } from "../../api";
import { House } from "../../type/hogwartsApis";
import { Flex, Spinner } from "@chakra-ui/react";

export const Root = () => {
  const [isFetching, setIsFetching] = useState<boolean>(true);
  const [houses, setHouses] = useState<House[]>([]);

  useEffect(() => {
    const getHouses = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 2000));

        const houses = await hogwartsApis.getAllHouses();
        setHouses(houses);
      } catch (error) {
      } finally {
        setIsFetching(false);
      }
    };
    getHouses();
  }, []);

  return (
    <Flex alignItems="center" justifyContent="center" py={100}>
      {(() => {
        if (isFetching) {
          return (
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="blue.500"
              size="xl"
            />
          );
        } else {
          return <HouseList houses={houses} />;
        }
      })()}
    </Flex>
  );
};

import { HogwartsHousesResponse } from "../type/hogwartsApis";
import { API } from "./api";
import { API_ROUTES } from "./apiRoutes";

class HogwartsApis {
  async getAllHouses() {
    try {
      const { data } = await API.get<HogwartsHousesResponse>(
        API_ROUTES.HOUSE.GET
      );
      return data;
    } catch (error: any) {
      return error.message;
    }
  }
}

const hogwartsApis = new HogwartsApis();

export default hogwartsApis;

import { backendHostname } from "./HostName.js";
import axios from "axios";

export default class LeagueService {
  static async GetLeagues() {
    try {
      const response = await axios.get(backendHostname + "League/GetLeagues");
      return response;
    } catch (error) {
      return error.response;
    }
  }

  static async GetLeagueTable(requestData) {
    try {
      const response = await axios.post(
        backendHostname + "League/GetLeagueTable",
        {
          leagueID: requestData.leagueID,
        }
      );
      return response;
    } catch (error) {
      return error.response;
    }
  }
}

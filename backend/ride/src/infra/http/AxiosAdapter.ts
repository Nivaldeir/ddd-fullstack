import axios from "axios";
import HttClient from "./HttpClient";

export default class AxiosAdapter implements HttClient {
  async get(url: string): Promise<any> {
    const response = await axios.get(url);
    return response.data
  }
  async post(url: string, body: any): Promise<any> {
    const response = await axios.post(url, body);
    return response.data
  }
}
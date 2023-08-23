export default interface HttClient {
  get(url: string): Promise<any>
  post(url: string, body: any): Promise<any>
}
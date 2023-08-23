// ISP - Interface Segregation Principle apartir da camada de interface adapter
export default interface DatabaseConnection{
  query(statement: string, params: any): Promise<any>
  close(): Promise<void>
}
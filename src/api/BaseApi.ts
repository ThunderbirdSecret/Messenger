import HTTPTransport from "utils/HTTPtransport";

export default class BaseApi {
    protected http: HTTPTransport;
  
    protected constructor(endpoint: string) {
      this.http = new HTTPTransport(endpoint);
    }
  
    public create?(data: unknown): Promise<unknown>;
  
    public reading?(identifier?: string): Promise<unknown>;

    public update?(identifier: string | number, data: unknown): Promise<unknown>;
      
    public delete?(identifier?: string | number): Promise<unknown>;
  }

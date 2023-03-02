import HTTPTransport from "utils/HttpTransport";

export default class BaseApi {
    protected http: HTTPTransport;
  
    protected constructor(endpoint: string) {
      this.http = new HTTPTransport(endpoint);
    }
  
    public create?(data: unknown): Promise<unknown>;
  
    public reading?(identifier?: string): Promise<unknown>;

    public update?(identifier: string, data: unknown): Promise<unknown>;
  
    public delete?(identifier?: string): Promise<unknown>;
  }

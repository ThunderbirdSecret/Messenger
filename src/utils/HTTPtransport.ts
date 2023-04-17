
enum Methods {
  Get = "GET",
  Post = "POST",
  Put = "PUT",
  Patch = "PATCH",
  Delete = "DELETE",
}

type Options = {
  method: Methods;
  data?: Record<string, any> | FormData | unknown;
};

export default class HTTPTransport {

  static API_URL = 'https://ya-praktikum.tech/api/v2';
  protected endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = `${HTTPTransport.API_URL}${endpoint}`;
  }

  public get<Response>(path = "/"): Promise<Response> {
    return this.request<Response>(this.endpoint + path)
  }

  public post<Response = void>(path: string, data?: unknown): Promise<Response> {
    return this.request<Response>(this.endpoint + path, {
      method: Methods.Post,
      data,
    });
  }

  public put<Response = void>(path: string, data: unknown): Promise<Response> {
    return this.request<Response>(this.endpoint + path, {
      method: Methods.Put,
      data,
    });
  }

  public patch<Response = void>(path: string, data: unknown): Promise<Response> {
    return this.request<Response>(this.endpoint + path, {
      method: Methods.Patch,
      data,
    });
  }

  public delete<Response>(path: string, data?: unknown): Promise<Response> {
    return this.request<Response>(this.endpoint + path, {
      method: Methods.Delete,
      data
    });
  }

  private request<Response>(url: string, options: Options = {method: Methods.Get}): Promise<Response> {
    const {method, data} = options;

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open(method, url);

      //@ts-expect-error
      xhr.onreadystatechange = (e) => {

        if (xhr.readyState === XMLHttpRequest.DONE) {
          if (xhr.status < 400) {
            resolve(xhr.response);
          } else {
            reject(xhr.response);
          }
        }
      };

      xhr.onabort = () => reject({reason: "abort"});
      xhr.onerror = () => reject({reason: "network error"});
      xhr.ontimeout = () => reject({reason: "timeout"});

      xhr.withCredentials = true;
      xhr.responseType = "json";


      if(!(data instanceof FormData)){
        xhr.setRequestHeader("Content-Type", "application/json");
      }

      if (method === Methods.Get || !data) {  
        xhr.send();
        return;
      }

      if (data instanceof FormData) {
        xhr.send(data);
        return;
      }

      xhr.send(JSON.stringify(data));
    });
  }
}

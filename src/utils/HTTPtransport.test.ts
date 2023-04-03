import sinon, { SinonFakeXMLHttpRequest, SinonFakeXMLHttpRequestStatic } from "sinon";
import { expect } from "chai";
import HTTPTransport from "./HTTPtransport";

describe("HTTPTransport", () => {
  const requests: SinonFakeXMLHttpRequest[] = [];
  const client = new HTTPTransport("/auth");
  let xhr: SinonFakeXMLHttpRequestStatic;

  beforeEach(() => {
    xhr = sinon.useFakeXMLHttpRequest();
    // @ts-ignore
    global.XMLHttpRequest = xhr;
    xhr.onCreate = ((request: SinonFakeXMLHttpRequest) => {
      requests.push(request);
    });
  });

  it("make GET request", () => {
    client.get('/user');
    const [request] = requests;
    expect(request.method).to.eq("GET");
  });

  it("make POST request", () => {
    client.post('/chats');
    const [request] = requests;
    expect(request.method).to.eq("POST");
  });

  it("make PUT request", () => {
    client.put("/chats", {});
    const [request] = requests;
    expect(request.method).to.eq("PUT");
  });

  it("make DELETE request", () => {
    client.delete("/chat/id");
    const [request] = requests;
    expect(request.method).to.eq("DELETE");
  });

  afterEach(() => {
    requests.length = 0;
    xhr.restore();
  });
});

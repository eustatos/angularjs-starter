import App from "./index";

describe("test", () => {
  const app = new App(); 
  it("spec", () => {
    expect(app.greating('World')).toEqual('Hello, World');
  });
});

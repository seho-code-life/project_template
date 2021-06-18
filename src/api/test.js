import BasicApi from "./basicApi";

class Test extends BasicApi {
  constructor() {
    super({
      version: "v1",
      moduleName: "test"
    });
  }
}

export default Test;

import { SSTConfig } from "sst";

export default {
  config(_input) {
    return {
      name: "danielswanncom",
      region: "us-east-1",
    };
  },
  stacks(app) {},
} satisfies SSTConfig;

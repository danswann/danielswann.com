import { SSTConfig } from 'sst';

import { Site } from './stacks/Site.js'


export default {
  config(_input) {
    return {
      name: 'danielswanncom',
      region: 'us-east-2',
      profile: process.env.CI ? undefined : (_input.stage === 'prod' ? 'production' : 'development')
    };
  },
  stacks(app) {
    app.stack(Site);
  },
} satisfies SSTConfig;

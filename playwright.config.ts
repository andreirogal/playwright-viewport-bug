import {devices, PlaywrightTestConfig} from '@playwright/test';

const config: PlaywrightTestConfig = {
    use: {
        ...devices['Galaxy S8']
    }
};
export default config;
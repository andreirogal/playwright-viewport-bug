import {devices, PlaywrightTestConfig} from '@playwright/test';

const config: PlaywrightTestConfig = {
    use: {
        screenshot: "only-on-failure",
        video: "retain-on-failure",
        ...devices['iPhone X']
    }
};
export default config;
import {devices, PlaywrightTestConfig} from '@playwright/test';

const config: PlaywrightTestConfig = {
    use: {
        ...devices['iPhone X'],
        browserName: 'chromium'
    }
};
export default config;
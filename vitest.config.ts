import { defineConfig } from 'vitest/config';

// Tells vitest to run the unit / integration tests in a simulated browser environment provided by jsdom as a library
export default defineConfig({
    test: {
        environment: 'jsdom'
    }
});
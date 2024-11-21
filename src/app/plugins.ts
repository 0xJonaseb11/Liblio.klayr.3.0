// /* eslint-disable @typescript-eslint/no-empty-function */
// import { Application } from 'klayr-sdk';

// export const registerPlugins = (_app: Application): void => {};

import { Application } from 'klayr-sdk';

export const registerPlugins = (app: Application) => {
    // Example of registering plugins (like logging, middleware, etc.)
    app.use(async (req, res, next) => {
        console.log('Logging request');
        next();
    });
};

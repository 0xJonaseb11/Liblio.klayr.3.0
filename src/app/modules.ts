// /* eslint-disable @typescript-eslint/no-empty-function */
// import { Application } from 'klayr-sdk';

// export const registerModules = (_app: Application): void => {};

import { Application } from 'klayr-sdk';

export const registerModules = (app: Application) => {
    // Example of registering additional app modules
    app.use(async (req, res, next) => {
        console.log('Request received');
        next();
    });
};

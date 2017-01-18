/// <reference path="../all.d.ts" />

export const configuration: environment.Configuration = {
    host: 'my.address.any',
    port: process.env.PORT || '3000',
    database: 'mariadb://root:root@localhost:3306/my-prod-database',
    debug: '',
    logger: {
        console: {
            level: 'error'
        }
    }
};

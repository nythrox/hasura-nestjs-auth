"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const nest_pgpromise_1 = require("nest-pgpromise");
const config_service_1 = require("../config/config.service");
const config_module_1 = require("../config/config.module");
const auth_module_1 = require("../auth/auth.module");
const pgPromiseFactory = {
    imports: [config_module_1.ConfigModule],
    useFactory: (configService) => {
        if (Boolean(configService.get('USE_DB_CONNECTION_URL'))) {
            return {
                connection: configService.get('DB_CONNECTION_URL'),
            };
        }
        else {
            return {
                connection: {
                    host: configService.get('DB_HOST'),
                    port: Number(configService.get('DB_PORT')),
                    database: configService.get('DB_DATABASE'),
                    user: configService.get('DB_USER'),
                    password: configService.get('DB_PASSWORD'),
                    ssl: true
                },
            };
        }
    },
    inject: [config_service_1.ConfigService]
};
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [nest_pgpromise_1.NestPgpromiseModule.registerAsync(pgPromiseFactory), auth_module_1.AuthModule],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
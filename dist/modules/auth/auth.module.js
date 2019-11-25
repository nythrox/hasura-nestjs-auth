"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const auth_controller_1 = require("./auth.controller");
const auth_service_1 = require("./auth.service");
const users_module_1 = require("../users/users.module");
const jwt_1 = require("@nestjs/jwt");
const config_service_1 = require("../config/config.service");
const config_module_1 = require("../config/config.module");
const jwtConfigsFactory = {
    imports: [config_module_1.ConfigModule],
    useFactory: (configService) => {
        return {
            secret: configService.get("JWT_SECRET"),
            signOptions: { expiresIn: configService.get("JWT_EXPIRES_IN") }
        };
    },
    inject: [config_service_1.ConfigService]
};
let AuthModule = class AuthModule {
};
AuthModule = __decorate([
    common_1.Module({
        imports: [
            users_module_1.UsersModule,
            jwt_1.JwtModule.registerAsync(jwtConfigsFactory)
        ],
        controllers: [auth_controller_1.AuthController],
        providers: [auth_service_1.AuthService]
    })
], AuthModule);
exports.AuthModule = AuthModule;
//# sourceMappingURL=auth.module.js.map
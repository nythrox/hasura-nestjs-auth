"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./modules/app/app.module");
const config_service_1 = require("./modules/config/config.service");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors();
    const configService = app.get(config_service_1.ConfigService);
    await app.listen(configService.get("PORT"));
}
bootstrap();
//# sourceMappingURL=main.js.map
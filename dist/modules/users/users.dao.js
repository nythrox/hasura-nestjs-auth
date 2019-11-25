"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const nest_pgpromise_1 = require("nest-pgpromise");
const user_model_1 = require("./user.model");
const quoted_1 = require("../../shared/utils/quoted");
let UsersDao = class UsersDao {
    constructor(pg) {
        this.pg = pg;
    }
    async findById(id) {
        const user = await this.pg.one("SELECT * FROM public.user WHERE id = " + quoted_1.quoted(id));
        return new user_model_1.UserModel({
            username: user.username,
            id: user.id,
            password: user.password,
            email: user.email,
            role: "admin"
        });
    }
    async findByEmail(email) {
        const user = await this.pg.one("SELECT * FROM public.user WHERE email = " + quoted_1.quoted(email));
        return new user_model_1.UserModel({
            username: user.username,
            id: user.id,
            password: user.password,
            email: user.email,
            role: "admin"
        });
    }
};
UsersDao = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject(nest_pgpromise_1.NEST_PGPROMISE_CONNECTION)),
    __metadata("design:paramtypes", [Object])
], UsersDao);
exports.UsersDao = UsersDao;
//# sourceMappingURL=users.dao.js.map
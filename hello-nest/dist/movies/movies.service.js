"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoviesService = void 0;
const common_1 = require("@nestjs/common");
let MoviesService = class MoviesService {
    constructor() {
        this.movies = [];
    }
    getAll() {
        return this.movies;
    }
    getOne(id) {
        console.log(typeof id);
        const movie = this.movies.find((movie) => movie.id === id);
        if (!movie) {
            throw new common_1.NotFoundException(`Film id: ${id} not found`);
        }
        return movie;
    }
    remove(id) {
        this.getOne(id);
        this.movies = this.movies.filter((movie) => movie.id !== id);
    }
    create(movieData) {
        this.movies.push({ id: this.movies.length + 1, ...movieData });
    }
    patch(id, updateData) {
        const movie = this.getOne(id);
        this.remove(id);
        this.movies.push({ ...movie, ...updateData });
    }
};
exports.MoviesService = MoviesService;
exports.MoviesService = MoviesService = __decorate([
    (0, common_1.Injectable)()
], MoviesService);
//# sourceMappingURL=movies.service.js.map
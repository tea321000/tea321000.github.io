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
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecoilViewModel = void 0;
const lib = require("lib");
const mobx = require("mobx");
const ui = require("ui");
class RecoilViewModel {
    constructor() {
        this.enable = new ui.BoolStorage('settings.recoil.enable', false);
        this.percentage = new ui.NumberStorage('settings.recoil.percentage', 0.75);
        mobx.makeObservable(this);
        mobx.autorun(this.updateOptions.bind(this));
    }
    updateOptions() {
        this.options = {
            percentage: this.percentage.value
        };
    }
}
__decorate([
    mobx.observable,
    __metadata("design:type", Object)
], RecoilViewModel.prototype, "options", void 0);
exports.RecoilViewModel = RecoilViewModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVjb2lsVmlld01vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL3VpL3NldHRpbmdzL3Jlc2VhcmNoL3ZpZXdNb2RlbHMvUmVjb2lsVmlld01vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLDJCQUEyQjtBQUMzQiw2QkFBNkI7QUFDN0IseUJBQXlCO0FBRXpCLE1BQWEsZUFBZTtJQUkxQjtRQUhTLFdBQU0sR0FBRyxJQUFJLEVBQUUsQ0FBQyxXQUFXLENBQUMsd0JBQXdCLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDN0QsZUFBVSxHQUFHLElBQUksRUFBRSxDQUFDLGFBQWEsQ0FBQyw0QkFBNEIsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUc3RSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBS08sYUFBYTtRQUNuQixJQUFJLENBQUMsT0FBTyxHQUFHO1lBQ2IsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSztTQUNsQyxDQUFDO0lBQ0osQ0FBQztDQUNGO0FBUkM7SUFBQyxJQUFJLENBQUMsVUFBVTs7Z0RBQ3NCO0FBVnhDLDBDQWlCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGxpYiBmcm9tICdsaWInO1xyXG5pbXBvcnQgKiBhcyBtb2J4IGZyb20gJ21vYngnO1xyXG5pbXBvcnQgKiBhcyB1aSBmcm9tICd1aSc7XHJcblxyXG5leHBvcnQgY2xhc3MgUmVjb2lsVmlld01vZGVsIHtcclxuICByZWFkb25seSBlbmFibGUgPSBuZXcgdWkuQm9vbFN0b3JhZ2UoJ3NldHRpbmdzLnJlY29pbC5lbmFibGUnLCBmYWxzZSk7XHJcbiAgcmVhZG9ubHkgcGVyY2VudGFnZSA9IG5ldyB1aS5OdW1iZXJTdG9yYWdlKCdzZXR0aW5ncy5yZWNvaWwucGVyY2VudGFnZScsIDAuNzUpO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIG1vYngubWFrZU9ic2VydmFibGUodGhpcyk7XHJcbiAgICBtb2J4LmF1dG9ydW4odGhpcy51cGRhdGVPcHRpb25zLmJpbmQodGhpcykpO1xyXG4gIH1cclxuICBcclxuICBAbW9ieC5vYnNlcnZhYmxlXHJcbiAgb3B0aW9ucz86IGxpYi5mZWF0dXJlcy5JUmVjb2lsT3B0aW9ucztcclxuXHJcbiAgcHJpdmF0ZSB1cGRhdGVPcHRpb25zKCkge1xyXG4gICAgdGhpcy5vcHRpb25zID0ge1xyXG4gICAgICBwZXJjZW50YWdlOiB0aGlzLnBlcmNlbnRhZ2UudmFsdWVcclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiJdfQ==
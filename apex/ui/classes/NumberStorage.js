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
exports.NumberStorage = void 0;
const mobx = require("mobx");
class NumberStorage {
    constructor(key, defaultValue) {
        this.key = key;
        const value = localStorage.getItem(key);
        this.value = value ? Number(value) : defaultValue;
        mobx.makeObservable(this);
    }
    change(value) {
        this.value = value;
        localStorage.setItem(this.key, String(this.value));
    }
}
__decorate([
    mobx.action,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], NumberStorage.prototype, "change", null);
__decorate([
    mobx.observable,
    __metadata("design:type", Number)
], NumberStorage.prototype, "value", void 0);
exports.NumberStorage = NumberStorage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTnVtYmVyU3RvcmFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91aS9jbGFzc2VzL051bWJlclN0b3JhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsNkJBQTZCO0FBRTdCLE1BQWEsYUFBYTtJQUN4QixZQUE2QixHQUFXLEVBQUUsWUFBb0I7UUFBakMsUUFBRyxHQUFILEdBQUcsQ0FBUTtRQUN0QyxNQUFNLEtBQUssR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQztRQUNsRCxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFHRCxNQUFNLENBQUMsS0FBYTtRQUNsQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ3JELENBQUM7Q0FJRjtBQVJDO0lBQUMsSUFBSSxDQUFDLE1BQU07Ozs7MkNBSVg7QUFFRDtJQUFDLElBQUksQ0FBQyxVQUFVOzs0Q0FDRjtBQWRoQixzQ0FlQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIG1vYnggZnJvbSAnbW9ieCc7XHJcblxyXG5leHBvcnQgY2xhc3MgTnVtYmVyU3RvcmFnZSB7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBrZXk6IHN0cmluZywgZGVmYXVsdFZhbHVlOiBudW1iZXIpIHtcclxuICAgIGNvbnN0IHZhbHVlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KTtcclxuICAgIHRoaXMudmFsdWUgPSB2YWx1ZSA/IE51bWJlcih2YWx1ZSkgOiBkZWZhdWx0VmFsdWU7XHJcbiAgICBtb2J4Lm1ha2VPYnNlcnZhYmxlKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgQG1vYnguYWN0aW9uXHJcbiAgY2hhbmdlKHZhbHVlOiBudW1iZXIpIHtcclxuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMua2V5LCBTdHJpbmcodGhpcy52YWx1ZSkpO1xyXG4gIH1cclxuXHJcbiAgQG1vYngub2JzZXJ2YWJsZVxyXG4gIHZhbHVlOiBudW1iZXI7XHJcbn1cclxuIl19
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
exports.StringStorage = void 0;
const mobx = require("mobx");
class StringStorage {
    constructor(key, defaultValue) {
        this.key = key;
        const value = localStorage.getItem(key);
        this.value = (value ? value : defaultValue);
        mobx.makeObservable(this);
    }
    change(value) {
        this.value = value;
        localStorage.setItem(this.key, this.value);
    }
}
__decorate([
    mobx.action,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StringStorage.prototype, "change", null);
__decorate([
    mobx.observable,
    __metadata("design:type", String)
], StringStorage.prototype, "value", void 0);
exports.StringStorage = StringStorage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RyaW5nU3RvcmFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91aS9jbGFzc2VzL1N0cmluZ1N0b3JhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsNkJBQTZCO0FBRTdCLE1BQWEsYUFBYTtJQUN4QixZQUE2QixHQUFXLEVBQUUsWUFBZTtRQUE1QixRQUFHLEdBQUgsR0FBRyxDQUFRO1FBQ3RDLE1BQU0sS0FBSyxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDeEMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQU0sQ0FBQztRQUNqRCxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFHRCxNQUFNLENBQUMsS0FBUTtRQUNiLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDN0MsQ0FBQztDQUlGO0FBUkM7SUFBQyxJQUFJLENBQUMsTUFBTTs7OzsyQ0FJWDtBQUVEO0lBQUMsSUFBSSxDQUFDLFVBQVU7OzRDQUNQO0FBZFgsc0NBZUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBtb2J4IGZyb20gJ21vYngnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFN0cmluZ1N0b3JhZ2U8VCBleHRlbmRzIHN0cmluZyA9IHN0cmluZz4ge1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkga2V5OiBzdHJpbmcsIGRlZmF1bHRWYWx1ZTogVCkge1xyXG4gICAgY29uc3QgdmFsdWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xyXG4gICAgdGhpcy52YWx1ZSA9ICh2YWx1ZSA/IHZhbHVlIDogZGVmYXVsdFZhbHVlKSBhcyBUO1xyXG4gICAgbW9ieC5tYWtlT2JzZXJ2YWJsZSh0aGlzKTtcclxuICB9XHJcblxyXG4gIEBtb2J4LmFjdGlvblxyXG4gIGNoYW5nZSh2YWx1ZTogVCkge1xyXG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy5rZXksIHRoaXMudmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgQG1vYngub2JzZXJ2YWJsZVxyXG4gIHZhbHVlOiBUO1xyXG59XHJcbiJdfQ==
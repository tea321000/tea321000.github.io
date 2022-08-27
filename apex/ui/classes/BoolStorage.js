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
exports.BoolStorage = void 0;
const mobx = require("mobx");
class BoolStorage {
    constructor(key, defaultValue) {
        this.key = key;
        const value = localStorage.getItem(key);
        this.value = value ? /^true$/i.test(value) : defaultValue;
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
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", void 0)
], BoolStorage.prototype, "change", null);
__decorate([
    mobx.observable,
    __metadata("design:type", Boolean)
], BoolStorage.prototype, "value", void 0);
exports.BoolStorage = BoolStorage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQm9vbFN0b3JhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdWkvY2xhc3Nlcy9Cb29sU3RvcmFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSw2QkFBNkI7QUFFN0IsTUFBYSxXQUFXO0lBQ3RCLFlBQTZCLEdBQVcsRUFBRSxZQUFxQjtRQUFsQyxRQUFHLEdBQUgsR0FBRyxDQUFRO1FBQ3RDLE1BQU0sS0FBSyxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDeEMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQztRQUMxRCxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFHRCxNQUFNLENBQUMsS0FBYztRQUNuQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ3JELENBQUM7Q0FJRjtBQVJDO0lBQUMsSUFBSSxDQUFDLE1BQU07Ozs7eUNBSVg7QUFFRDtJQUFDLElBQUksQ0FBQyxVQUFVOzswQ0FDRDtBQWRqQixrQ0FlQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIG1vYnggZnJvbSAnbW9ieCc7XHJcblxyXG5leHBvcnQgY2xhc3MgQm9vbFN0b3JhZ2Uge1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkga2V5OiBzdHJpbmcsIGRlZmF1bHRWYWx1ZTogYm9vbGVhbikge1xyXG4gICAgY29uc3QgdmFsdWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xyXG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlID8gL150cnVlJC9pLnRlc3QodmFsdWUpIDogZGVmYXVsdFZhbHVlO1xyXG4gICAgbW9ieC5tYWtlT2JzZXJ2YWJsZSh0aGlzKTtcclxuICB9XHJcblxyXG4gIEBtb2J4LmFjdGlvblxyXG4gIGNoYW5nZSh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy5rZXksIFN0cmluZyh0aGlzLnZhbHVlKSk7XHJcbiAgfVxyXG5cclxuICBAbW9ieC5vYnNlcnZhYmxlXHJcbiAgdmFsdWU6IGJvb2xlYW47XHJcbn1cclxuIl19
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemViewModel = void 0;
const ui = require("ui");
class ItemViewModel {
    constructor(value, store = new ui.BoolStorage(`Items[${value.name}]`, false)) {
        this.value = value;
        this.store = store;
    }
}
exports.ItemViewModel = ItemViewModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSXRlbVZpZXdNb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy91aS9zZXR0aW5ncy9pdGVtcy92aWV3TW9kZWxzL0l0ZW1WaWV3TW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EseUJBQXlCO0FBRXpCLE1BQWEsYUFBYTtJQUN4QixZQUNXLEtBQW9CLEVBQ3BCLFFBQVEsSUFBSSxFQUFFLENBQUMsV0FBVyxDQUFDLFNBQVMsS0FBSyxDQUFDLElBQUksR0FBRyxFQUFFLEtBQUssQ0FBQztRQUR6RCxVQUFLLEdBQUwsS0FBSyxDQUFlO1FBQ3BCLFVBQUssR0FBTCxLQUFLLENBQW9EO0lBQUcsQ0FBQztDQUN6RTtBQUpELHNDQUlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgbGliIGZyb20gJ2xpYic7XHJcbmltcG9ydCAqIGFzIHVpIGZyb20gJ3VpJztcclxuXHJcbmV4cG9ydCBjbGFzcyBJdGVtVmlld01vZGVsIHtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHJlYWRvbmx5IHZhbHVlOiBsaWIuaXRlbXMuQWxsLFxyXG4gICAgcmVhZG9ubHkgc3RvcmUgPSBuZXcgdWkuQm9vbFN0b3JhZ2UoYEl0ZW1zWyR7dmFsdWUubmFtZX1dYCwgZmFsc2UpKSB7fVxyXG59XHJcbiJdfQ==
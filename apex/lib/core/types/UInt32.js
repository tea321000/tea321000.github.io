"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UInt32 = void 0;
const app = require("..");
class UInt32 extends app.api.Adapter {
    constructor(offset, interval = 0) {
        super(new app.api.EntityMember(offset, interval, 4));
    }
    get value() {
        return this.source.buffer.getUint32(0, true);
    }
    set value(value) {
        if (value === this.value)
            return;
        this.source.buffer.setUint32(0, value, true);
        this.source.send = true;
    }
    toString() {
        return this.value.toString();
    }
}
exports.UInt32 = UInt32;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVUludDMyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9jb3JlL3R5cGVzL1VJbnQzMi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwwQkFBMEI7QUFFMUIsTUFBYSxNQUFPLFNBQVEsR0FBRyxDQUFDLEdBQUcsQ0FBQyxPQUE2QjtJQUMvRCxZQUFZLE1BQWMsRUFBRSxRQUFRLEdBQUcsQ0FBQztRQUN0QyxLQUFLLENBQUMsSUFBSSxHQUFHLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUVELElBQUksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRUQsSUFBSSxLQUFLLENBQUMsS0FBYTtRQUNyQixJQUFJLEtBQUssS0FBSyxJQUFJLENBQUMsS0FBSztZQUFFLE9BQU87UUFDakMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQzFCLENBQUM7SUFFRCxRQUFRO1FBQ04sT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQy9CLENBQUM7Q0FDRjtBQWxCRCx3QkFrQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBhcHAgZnJvbSAnLi4nO1xyXG5cclxuZXhwb3J0IGNsYXNzIFVJbnQzMiBleHRlbmRzIGFwcC5hcGkuQWRhcHRlcjxhcHAuYXBpLkVudGl0eU1lbWJlcj4ge1xyXG4gIGNvbnN0cnVjdG9yKG9mZnNldDogbnVtYmVyLCBpbnRlcnZhbCA9IDApIHtcclxuICAgIHN1cGVyKG5ldyBhcHAuYXBpLkVudGl0eU1lbWJlcihvZmZzZXQsIGludGVydmFsLCA0KSk7XHJcbiAgfVxyXG5cclxuICBnZXQgdmFsdWUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5zb3VyY2UuYnVmZmVyLmdldFVpbnQzMigwLCB0cnVlKTtcclxuICB9XHJcblxyXG4gIHNldCB2YWx1ZSh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICBpZiAodmFsdWUgPT09IHRoaXMudmFsdWUpIHJldHVybjtcclxuICAgIHRoaXMuc291cmNlLmJ1ZmZlci5zZXRVaW50MzIoMCwgdmFsdWUsIHRydWUpO1xyXG4gICAgdGhpcy5zb3VyY2Uuc2VuZCA9IHRydWU7XHJcbiAgfVxyXG5cclxuICB0b1N0cmluZygpIHtcclxuICAgIHJldHVybiB0aGlzLnZhbHVlLnRvU3RyaW5nKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==
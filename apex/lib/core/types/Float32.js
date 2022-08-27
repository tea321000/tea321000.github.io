"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Float32 = void 0;
const app = require("..");
class Float32 extends app.api.Adapter {
    constructor(offset, interval = 0) {
        super(new app.api.EntityMember(offset, interval, 4));
    }
    get value() {
        return this.source.buffer.getFloat32(0, true);
    }
    set value(value) {
        if (value === this.value)
            return;
        this.source.buffer.setFloat32(0, value, true);
        this.source.send = true;
    }
    toString() {
        return this.value.toString();
    }
}
exports.Float32 = Float32;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmxvYXQzMi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvY29yZS90eXBlcy9GbG9hdDMyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDBCQUEwQjtBQUUxQixNQUFhLE9BQVEsU0FBUSxHQUFHLENBQUMsR0FBRyxDQUFDLE9BQTZCO0lBQ2hFLFlBQVksTUFBYyxFQUFFLFFBQVEsR0FBRyxDQUFDO1FBQ3RDLEtBQUssQ0FBQyxJQUFJLEdBQUcsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBRUQsSUFBSSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFRCxJQUFJLEtBQUssQ0FBQyxLQUFhO1FBQ3JCLElBQUksS0FBSyxLQUFLLElBQUksQ0FBQyxLQUFLO1lBQUUsT0FBTztRQUNqQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDMUIsQ0FBQztJQUVELFFBQVE7UUFDTixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDL0IsQ0FBQztDQUNGO0FBbEJELDBCQWtCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGFwcCBmcm9tICcuLic7XHJcblxyXG5leHBvcnQgY2xhc3MgRmxvYXQzMiBleHRlbmRzIGFwcC5hcGkuQWRhcHRlcjxhcHAuYXBpLkVudGl0eU1lbWJlcj4ge1xyXG4gIGNvbnN0cnVjdG9yKG9mZnNldDogbnVtYmVyLCBpbnRlcnZhbCA9IDApIHtcclxuICAgIHN1cGVyKG5ldyBhcHAuYXBpLkVudGl0eU1lbWJlcihvZmZzZXQsIGludGVydmFsLCA0KSk7XHJcbiAgfVxyXG5cclxuICBnZXQgdmFsdWUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5zb3VyY2UuYnVmZmVyLmdldEZsb2F0MzIoMCwgdHJ1ZSk7XHJcbiAgfVxyXG5cclxuICBzZXQgdmFsdWUodmFsdWU6IG51bWJlcikge1xyXG4gICAgaWYgKHZhbHVlID09PSB0aGlzLnZhbHVlKSByZXR1cm47XHJcbiAgICB0aGlzLnNvdXJjZS5idWZmZXIuc2V0RmxvYXQzMigwLCB2YWx1ZSwgdHJ1ZSk7XHJcbiAgICB0aGlzLnNvdXJjZS5zZW5kID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHRvU3RyaW5nKCkge1xyXG4gICAgcmV0dXJuIHRoaXMudmFsdWUudG9TdHJpbmcoKTtcclxuICB9XHJcbn1cclxuIl19
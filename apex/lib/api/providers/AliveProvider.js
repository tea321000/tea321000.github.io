"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AliveProvider = void 0;
const app = require("..");
class AliveProvider {
    constructor() {
        this.nextActiveTime = this.getNextTime();
    }
    update(stream) {
        if (this.nextActiveTime >= Date.now())
            return;
        new app.BasicAlive().write(stream);
        this.nextActiveTime = this.getNextTime();
    }
    getNextTime() {
        return Date.now() + 10000;
    }
}
exports.AliveProvider = AliveProvider;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWxpdmVQcm92aWRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvYXBpL3Byb3ZpZGVycy9BbGl2ZVByb3ZpZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDBCQUEwQjtBQUUxQixNQUFhLGFBQWE7SUFBMUI7UUFDVSxtQkFBYyxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQVc5QyxDQUFDO0lBVEMsTUFBTSxDQUFDLE1BQXdCO1FBQzdCLElBQUksSUFBSSxDQUFDLGNBQWMsSUFBSSxJQUFJLENBQUMsR0FBRyxFQUFFO1lBQUUsT0FBTztRQUM5QyxJQUFJLEdBQUcsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbkMsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDM0MsQ0FBQztJQUVPLFdBQVc7UUFDakIsT0FBTyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsS0FBSyxDQUFDO0lBQzVCLENBQUM7Q0FDRjtBQVpELHNDQVlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgYXBwIGZyb20gJy4uJztcclxuXHJcbmV4cG9ydCBjbGFzcyBBbGl2ZVByb3ZpZGVyIGltcGxlbWVudHMgYXBwLklQYWNrZXRQcm92aWRlciB7XHJcbiAgcHJpdmF0ZSBuZXh0QWN0aXZlVGltZSA9IHRoaXMuZ2V0TmV4dFRpbWUoKTtcclxuXHJcbiAgdXBkYXRlKHN0cmVhbTogYXBwLkJpbmFyeVdyaXRlcikge1xyXG4gICAgaWYgKHRoaXMubmV4dEFjdGl2ZVRpbWUgPj0gRGF0ZS5ub3coKSkgcmV0dXJuO1xyXG4gICAgbmV3IGFwcC5CYXNpY0FsaXZlKCkud3JpdGUoc3RyZWFtKTtcclxuICAgIHRoaXMubmV4dEFjdGl2ZVRpbWUgPSB0aGlzLmdldE5leHRUaW1lKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldE5leHRUaW1lKCkge1xyXG4gICAgcmV0dXJuIERhdGUubm93KCkgKyAxMDAwMDtcclxuICB9XHJcbn1cclxuIl19
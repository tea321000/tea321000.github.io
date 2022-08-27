"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainViewModel = void 0;
const app = require(".");
const ui = require("ui");
class MainViewModel {
    constructor() {
        this.map = new app.MapViewModel();
        this.radar = new app.RadarViewModel();
        this.sense = new app.SenseViewModel();
        this.viewType = new ui.StringStorage('settings.viewType', app.MainType.Radar);
    }
}
exports.MainViewModel = MainViewModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWFpblZpZXdNb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy91aS9zZXR0aW5ncy9nZW5lcmFsL01haW5WaWV3TW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEseUJBQXlCO0FBQ3pCLHlCQUF5QjtBQUV6QixNQUFhLGFBQWE7SUFBMUI7UUFDVyxRQUFHLEdBQUcsSUFBSSxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDN0IsVUFBSyxHQUFHLElBQUksR0FBRyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ2pDLFVBQUssR0FBRyxJQUFJLEdBQUcsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUNqQyxhQUFRLEdBQUcsSUFBSSxFQUFFLENBQUMsYUFBYSxDQUFlLG1CQUFtQixFQUFFLEdBQUcsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbEcsQ0FBQztDQUFBO0FBTEQsc0NBS0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBhcHAgZnJvbSAnLic7XHJcbmltcG9ydCAqIGFzIHVpIGZyb20gJ3VpJztcclxuXHJcbmV4cG9ydCBjbGFzcyBNYWluVmlld01vZGVsIHtcclxuICByZWFkb25seSBtYXAgPSBuZXcgYXBwLk1hcFZpZXdNb2RlbCgpO1xyXG4gIHJlYWRvbmx5IHJhZGFyID0gbmV3IGFwcC5SYWRhclZpZXdNb2RlbCgpO1xyXG4gIHJlYWRvbmx5IHNlbnNlID0gbmV3IGFwcC5TZW5zZVZpZXdNb2RlbCgpO1xyXG4gIHJlYWRvbmx5IHZpZXdUeXBlID0gbmV3IHVpLlN0cmluZ1N0b3JhZ2U8YXBwLk1haW5UeXBlPignc2V0dGluZ3Mudmlld1R5cGUnLCBhcHAuTWFpblR5cGUuUmFkYXIpO1xyXG59XHJcbiJdfQ==
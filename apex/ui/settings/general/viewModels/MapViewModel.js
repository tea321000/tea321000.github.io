"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MapViewModel = void 0;
const ui = require("ui");
class MapViewModel {
    constructor() {
        this.showItems = new ui.BoolStorage('settings.map.showItems', false);
        this.showPlayers = new ui.BoolStorage('settings.map.showPlayers', true);
    }
}
exports.MapViewModel = MapViewModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWFwVmlld01vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL3VpL3NldHRpbmdzL2dlbmVyYWwvdmlld01vZGVscy9NYXBWaWV3TW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEseUJBQXlCO0FBRXpCLE1BQWEsWUFBWTtJQUF6QjtRQUNXLGNBQVMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxXQUFXLENBQUMsd0JBQXdCLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDaEUsZ0JBQVcsR0FBRyxJQUFJLEVBQUUsQ0FBQyxXQUFXLENBQUMsMEJBQTBCLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDOUUsQ0FBQztDQUFBO0FBSEQsb0NBR0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyB1aSBmcm9tICd1aSc7XHJcblxyXG5leHBvcnQgY2xhc3MgTWFwVmlld01vZGVsIHtcclxuICByZWFkb25seSBzaG93SXRlbXMgPSBuZXcgdWkuQm9vbFN0b3JhZ2UoJ3NldHRpbmdzLm1hcC5zaG93SXRlbXMnLCBmYWxzZSk7XHJcbiAgcmVhZG9ubHkgc2hvd1BsYXllcnMgPSBuZXcgdWkuQm9vbFN0b3JhZ2UoJ3NldHRpbmdzLm1hcC5zaG93UGxheWVycycsIHRydWUpO1xyXG59XHJcbiJdfQ==
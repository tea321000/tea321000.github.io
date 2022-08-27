"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainView = void 0;
const React = require("react");
const ui = require("ui");
exports.MainView = ui.createView(() => {
    React.useEffect(() => {
        const canvas = document.getElementById('canvas');
        canvas.style.display = 'inline';
        return () => onUnmount(canvas);
    }, []);
    return null;
});
function onUnmount(canvas) {
    canvas.style.display = 'none';
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWFpblZpZXcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdWkvbWFpbi9NYWluVmlldy50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsK0JBQStCO0FBQy9CLHlCQUF5QjtBQUVaLFFBQUEsUUFBUSxHQUFHLEVBQUUsQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFO0lBQ3pDLEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFO1FBQ25CLE1BQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFzQixDQUFDO1FBQ3RFLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQztRQUNoQyxPQUFPLEdBQUcsRUFBRSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNqQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDUCxPQUFPLElBQUksQ0FBQztBQUNkLENBQUMsQ0FBQyxDQUFDO0FBRUgsU0FBUyxTQUFTLENBQUMsTUFBbUI7SUFDcEMsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO0FBQ2hDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAqIGFzIHVpIGZyb20gJ3VpJztcclxuXHJcbmV4cG9ydCBjb25zdCBNYWluVmlldyA9IHVpLmNyZWF0ZVZpZXcoKCkgPT4ge1xyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FudmFzJykgYXMgSFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgICBjYW52YXMuc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUnO1xyXG4gICAgcmV0dXJuICgpID0+IG9uVW5tb3VudChjYW52YXMpO1xyXG4gIH0sIFtdKTtcclxuICByZXR1cm4gbnVsbDtcclxufSk7XHJcblxyXG5mdW5jdGlvbiBvblVubW91bnQoY2FudmFzOiBIVE1MRWxlbWVudCkge1xyXG4gIGNhbnZhcy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG59XHJcbiJdfQ==
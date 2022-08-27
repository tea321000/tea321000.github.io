"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityChangeMember = void 0;
class EntityChangeMember {
    constructor(offset, buffer, deltas) {
        this.offset = offset;
        this.buffer = buffer;
        this.deltas = deltas;
    }
    write(stream) {
        stream.writeVariableLength(this.offset);
        if (this.deltas) {
            stream.writeVariableLength(this.deltas.length);
            this.deltas.forEach(x => x.write(stream));
        }
        else {
            stream.writeUInt8(0);
            stream.writeVariableLength(this.buffer.byteLength);
            stream.writeBytes(this.buffer);
        }
    }
}
exports.EntityChangeMember = EntityChangeMember;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRW50aXR5Q2hhbmdlTWVtYmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9hcGkvcGFja2V0cy9FbnRpdHlDaGFuZ2VNZW1iZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBRUEsTUFBYSxrQkFBa0I7SUFDN0IsWUFDVyxNQUFjLEVBQ2QsTUFBZ0IsRUFDaEIsTUFBMkM7UUFGM0MsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLFdBQU0sR0FBTixNQUFNLENBQVU7UUFDaEIsV0FBTSxHQUFOLE1BQU0sQ0FBcUM7SUFBRyxDQUFDO0lBRTFELEtBQUssQ0FBQyxNQUF3QjtRQUM1QixNQUFNLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3hDLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNmLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQy9DLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1NBQzNDO2FBQU07WUFDTCxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3JCLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ25ELE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ2hDO0lBQ0gsQ0FBQztDQUNGO0FBakJELGdEQWlCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGFwcCBmcm9tICcuLic7XHJcblxyXG5leHBvcnQgY2xhc3MgRW50aXR5Q2hhbmdlTWVtYmVyIGltcGxlbWVudHMgYXBwLklQYWNrZXRXcml0ZXIge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcmVhZG9ubHkgb2Zmc2V0OiBudW1iZXIsXHJcbiAgICByZWFkb25seSBidWZmZXI6IERhdGFWaWV3LFxyXG4gICAgcmVhZG9ubHkgZGVsdGFzPzogQXJyYXk8YXBwLkVudGl0eUNoYW5nZU1lbWJlckRlbHRhPikge31cclxuXHJcbiAgd3JpdGUoc3RyZWFtOiBhcHAuQmluYXJ5V3JpdGVyKSB7XHJcbiAgICBzdHJlYW0ud3JpdGVWYXJpYWJsZUxlbmd0aCh0aGlzLm9mZnNldCk7XHJcbiAgICBpZiAodGhpcy5kZWx0YXMpIHtcclxuICAgICAgc3RyZWFtLndyaXRlVmFyaWFibGVMZW5ndGgodGhpcy5kZWx0YXMubGVuZ3RoKTtcclxuICAgICAgdGhpcy5kZWx0YXMuZm9yRWFjaCh4ID0+IHgud3JpdGUoc3RyZWFtKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzdHJlYW0ud3JpdGVVSW50OCgwKTtcclxuICAgICAgc3RyZWFtLndyaXRlVmFyaWFibGVMZW5ndGgodGhpcy5idWZmZXIuYnl0ZUxlbmd0aCk7XHJcbiAgICAgIHN0cmVhbS53cml0ZUJ5dGVzKHRoaXMuYnVmZmVyKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19
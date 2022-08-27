"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
const app = require("..");
class Player extends app.api.Adapter {
    constructor(address, localOrigin = new app.Vector(app.offsets.entity.localOrigin), glowEnable = new app.UInt8(app.offsets.player.glowEnable), glowThroughWalls = new app.UInt8(app.offsets.player.glowThroughWall), teamNum = new app.UInt8(app.offsets.player.iTeamNum, 1000), name = new app.UInt64(app.offsets.player.iName), lifeState = new app.UInt8(app.offsets.player.lifeState), lastVisibleTime = new app.Float32(app.offsets.entity.lastVisibleTime), vecPunchWeaponAngle = new app.Vector(app.offsets.player.vecPunchWeaponAngle), viewAngle = new app.Vector(app.offsets.player.viewAngle), bleedoutState = new app.UInt8(app.offsets.player.bleedoutState)) {
        super(new app.api.Entity(address, [localOrigin, glowEnable, glowThroughWalls, teamNum, name, lifeState, lastVisibleTime, vecPunchWeaponAngle, viewAngle, bleedoutState], { enableUpdate: true }));
        this.address = address;
        this.localOrigin = localOrigin;
        this.glowEnable = glowEnable;
        this.glowThroughWalls = glowThroughWalls;
        this.teamNum = teamNum;
        this.name = name;
        this.lifeState = lifeState;
        this.lastVisibleTime = lastVisibleTime;
        this.vecPunchWeaponAngle = vecPunchWeaponAngle;
        this.viewAngle = viewAngle;
        this.bleedoutState = bleedoutState;
    }
    get isValid() {
        return !this.lifeState.value
            && this.name.value
            && this.glowEnable.value !== 0
            && this.glowEnable.value !== 255;
    }
    createColor(otherPlayer) {
        return this.isSameTeam(otherPlayer)
            ? (this.bleedoutState.value ? '#FFFF00' : '#00FF00')
            : (this.bleedoutState.value ? '#FFA500' : '#FF0000');
    }
    isSameTeam(otherPlayer) {
        return this.teamNum.value === otherPlayer.teamNum.value;
    }
    toString() {
        return app.serialize(this);
    }
}
exports.Player = Player;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGxheWVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9jb3JlL2VudGl0aWVzL1BsYXllci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwwQkFBMEI7QUFFMUIsTUFBYSxNQUFPLFNBQVEsR0FBRyxDQUFDLEdBQUcsQ0FBQyxPQUF1QjtJQUN6RCxZQUNXLE9BQWUsRUFDZixjQUFjLElBQUksR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsRUFDNUQsYUFBYSxJQUFJLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLEVBQ3pELG1CQUFtQixJQUFJLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLEVBQ3BFLFVBQVUsSUFBSSxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsRUFDMUQsT0FBTyxJQUFJLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQy9DLFlBQVksSUFBSSxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxFQUN2RCxrQkFBa0IsSUFBSSxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxFQUNyRSxzQkFBc0IsSUFBSSxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLG1CQUFtQixDQUFDLEVBQzVFLFlBQVksSUFBSSxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxFQUN4RCxnQkFBZ0IsSUFBSSxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQztRQUN4RSxLQUFLLENBQUMsSUFBSSxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxXQUFXLEVBQUUsVUFBVSxFQUFFLGdCQUFnQixFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLGVBQWUsRUFBRSxtQkFBbUIsRUFBRSxTQUFTLEVBQUUsYUFBYSxDQUFDLEVBQUUsRUFBQyxZQUFZLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQyxDQUFDO1FBWHZMLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFDZixnQkFBVyxHQUFYLFdBQVcsQ0FBaUQ7UUFDNUQsZUFBVSxHQUFWLFVBQVUsQ0FBK0M7UUFDekQscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFvRDtRQUNwRSxZQUFPLEdBQVAsT0FBTyxDQUFtRDtRQUMxRCxTQUFJLEdBQUosSUFBSSxDQUEyQztRQUMvQyxjQUFTLEdBQVQsU0FBUyxDQUE4QztRQUN2RCxvQkFBZSxHQUFmLGVBQWUsQ0FBc0Q7UUFDckUsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUF5RDtRQUM1RSxjQUFTLEdBQVQsU0FBUyxDQUErQztRQUN4RCxrQkFBYSxHQUFiLGFBQWEsQ0FBa0Q7SUFFMUUsQ0FBQztJQUVELElBQUksT0FBTztRQUNULE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUs7ZUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLO2VBQ2YsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEtBQUssQ0FBQztlQUMzQixJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssS0FBSyxHQUFHLENBQUM7SUFDckMsQ0FBQztJQUVELFdBQVcsQ0FBQyxXQUF1QjtRQUNqQyxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDO1lBQ2pDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztZQUNwRCxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN6RCxDQUFDO0lBRUQsVUFBVSxDQUFDLFdBQXVCO1FBQ2hDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEtBQUssV0FBVyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7SUFDMUQsQ0FBQztJQUVELFFBQVE7UUFDTixPQUFPLEdBQUcsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0IsQ0FBQztDQUNGO0FBcENELHdCQW9DQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGFwcCBmcm9tICcuLic7XHJcblxyXG5leHBvcnQgY2xhc3MgUGxheWVyIGV4dGVuZHMgYXBwLmFwaS5BZGFwdGVyPGFwcC5hcGkuRW50aXR5PiB7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICByZWFkb25seSBhZGRyZXNzOiBiaWdpbnQsXHJcbiAgICByZWFkb25seSBsb2NhbE9yaWdpbiA9IG5ldyBhcHAuVmVjdG9yKGFwcC5vZmZzZXRzLmVudGl0eS5sb2NhbE9yaWdpbiksXHJcbiAgICByZWFkb25seSBnbG93RW5hYmxlID0gbmV3IGFwcC5VSW50OChhcHAub2Zmc2V0cy5wbGF5ZXIuZ2xvd0VuYWJsZSksXHJcbiAgICByZWFkb25seSBnbG93VGhyb3VnaFdhbGxzID0gbmV3IGFwcC5VSW50OChhcHAub2Zmc2V0cy5wbGF5ZXIuZ2xvd1Rocm91Z2hXYWxsKSxcclxuICAgIHJlYWRvbmx5IHRlYW1OdW0gPSBuZXcgYXBwLlVJbnQ4KGFwcC5vZmZzZXRzLnBsYXllci5pVGVhbU51bSwgMTAwMCksXHJcbiAgICByZWFkb25seSBuYW1lID0gbmV3IGFwcC5VSW50NjQoYXBwLm9mZnNldHMucGxheWVyLmlOYW1lKSxcclxuICAgIHJlYWRvbmx5IGxpZmVTdGF0ZSA9IG5ldyBhcHAuVUludDgoYXBwLm9mZnNldHMucGxheWVyLmxpZmVTdGF0ZSksXHJcbiAgICByZWFkb25seSBsYXN0VmlzaWJsZVRpbWUgPSBuZXcgYXBwLkZsb2F0MzIoYXBwLm9mZnNldHMuZW50aXR5Lmxhc3RWaXNpYmxlVGltZSksXHJcbiAgICByZWFkb25seSB2ZWNQdW5jaFdlYXBvbkFuZ2xlID0gbmV3IGFwcC5WZWN0b3IoYXBwLm9mZnNldHMucGxheWVyLnZlY1B1bmNoV2VhcG9uQW5nbGUpLFxyXG4gICAgcmVhZG9ubHkgdmlld0FuZ2xlID0gbmV3IGFwcC5WZWN0b3IoYXBwLm9mZnNldHMucGxheWVyLnZpZXdBbmdsZSksXHJcbiAgICByZWFkb25seSBibGVlZG91dFN0YXRlID0gbmV3IGFwcC5VSW50OChhcHAub2Zmc2V0cy5wbGF5ZXIuYmxlZWRvdXRTdGF0ZSkpIHtcclxuICAgIHN1cGVyKG5ldyBhcHAuYXBpLkVudGl0eShhZGRyZXNzLCBbbG9jYWxPcmlnaW4sIGdsb3dFbmFibGUsIGdsb3dUaHJvdWdoV2FsbHMsIHRlYW1OdW0sIG5hbWUsIGxpZmVTdGF0ZSwgbGFzdFZpc2libGVUaW1lLCB2ZWNQdW5jaFdlYXBvbkFuZ2xlLCB2aWV3QW5nbGUsIGJsZWVkb3V0U3RhdGVdLCB7ZW5hYmxlVXBkYXRlOiB0cnVlfSkpO1xyXG4gIH1cclxuICBcclxuICBnZXQgaXNWYWxpZCgpIHtcclxuICAgIHJldHVybiAhdGhpcy5saWZlU3RhdGUudmFsdWVcclxuICAgICAgJiYgdGhpcy5uYW1lLnZhbHVlXHJcbiAgICAgICYmIHRoaXMuZ2xvd0VuYWJsZS52YWx1ZSAhPT0gMFxyXG4gICAgICAmJiB0aGlzLmdsb3dFbmFibGUudmFsdWUgIT09IDI1NTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZUNvbG9yKG90aGVyUGxheWVyOiBhcHAuUGxheWVyKSB7XHJcbiAgICByZXR1cm4gdGhpcy5pc1NhbWVUZWFtKG90aGVyUGxheWVyKVxyXG4gICAgICA/ICh0aGlzLmJsZWVkb3V0U3RhdGUudmFsdWUgPyAnI0ZGRkYwMCcgOiAnIzAwRkYwMCcpXHJcbiAgICAgIDogKHRoaXMuYmxlZWRvdXRTdGF0ZS52YWx1ZSA/ICcjRkZBNTAwJyA6ICcjRkYwMDAwJyk7XHJcbiAgfVxyXG5cclxuICBpc1NhbWVUZWFtKG90aGVyUGxheWVyOiBhcHAuUGxheWVyKSB7XHJcbiAgICByZXR1cm4gdGhpcy50ZWFtTnVtLnZhbHVlID09PSBvdGhlclBsYXllci50ZWFtTnVtLnZhbHVlO1xyXG4gIH1cclxuXHJcbiAgdG9TdHJpbmcoKSB7XHJcbiAgICByZXR1cm4gYXBwLnNlcmlhbGl6ZSh0aGlzKTtcclxuICB9XHJcbn1cclxuIl19
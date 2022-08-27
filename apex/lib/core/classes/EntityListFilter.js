"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityListFilter = void 0;
class EntityListFilter {
    constructor(Constructor, signifier) {
        this.Constructor = Constructor;
        this.signifier = signifier;
        this.entities = new Map();
        this.nextTime = 0;
    }
    get map() {
        return this.entities;
    }
    update(channel, entityList, signifierList) {
        if (!this.nextTime || this.nextTime < Date.now()) {
            this.onUpdate(channel, entityList, signifierList);
            this.nextTime = Date.now() + 1000;
        }
    }
    checkCreate(address, channel, knownSet) {
        if (!this.entities.has(address)) {
            const entity = new this.Constructor(address);
            this.entities.set(address, entity);
            channel.create(entity);
            knownSet.add(address);
        }
        else {
            knownSet.add(address);
        }
    }
    onUpdate(channel, entityList, signifierList) {
        const knownSet = new Set();
        for (const x of entityList.map.values()) {
            const signifier = signifierList.get(x.value);
            if (signifier.value !== this.signifier)
                continue;
            this.checkCreate(x.source.address, channel, knownSet);
        }
        for (const [k, v] of this.entities) {
            if (knownSet.has(k))
                continue;
            this.entities.delete(k);
            channel.delete(v);
        }
    }
}
exports.EntityListFilter = EntityListFilter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRW50aXR5TGlzdEZpbHRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvY29yZS9jbGFzc2VzL0VudGl0eUxpc3RGaWx0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBRUEsTUFBYSxnQkFBZ0I7SUFJM0IsWUFDbUIsV0FBdUMsRUFDdkMsU0FBaUI7UUFEakIsZ0JBQVcsR0FBWCxXQUFXLENBQTRCO1FBQ3ZDLGNBQVMsR0FBVCxTQUFTLENBQVE7UUFMbkIsYUFBUSxHQUFHLElBQUksR0FBRyxFQUFhLENBQUM7UUFDekMsYUFBUSxHQUFHLENBQUMsQ0FBQztJQUlrQixDQUFDO0lBRXhDLElBQUksR0FBRztRQUNMLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN2QixDQUFDO0lBRUQsTUFBTSxDQUFDLE9BQXdCLEVBQUUsVUFBMEIsRUFBRSxhQUFnQztRQUMzRixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFBRTtZQUNoRCxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxVQUFVLEVBQUUsYUFBYSxDQUFDLENBQUM7WUFDbEQsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDO1NBQ25DO0lBQ0gsQ0FBQztJQUVPLFdBQVcsQ0FBQyxPQUFlLEVBQUUsT0FBd0IsRUFBRSxRQUFxQjtRQUNsRixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDL0IsTUFBTSxNQUFNLEdBQUcsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzdDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztZQUNuQyxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3ZCLFFBQVEsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDdkI7YUFBTTtZQUNMLFFBQVEsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDdkI7SUFDSCxDQUFDO0lBRU8sUUFBUSxDQUFDLE9BQXdCLEVBQUUsVUFBMEIsRUFBRSxhQUFnQztRQUNyRyxNQUFNLFFBQVEsR0FBRyxJQUFJLEdBQUcsRUFBVSxDQUFDO1FBQ25DLEtBQUssTUFBTSxDQUFDLElBQUksVUFBVSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsRUFBRTtZQUN2QyxNQUFNLFNBQVMsR0FBRyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM3QyxJQUFJLFNBQVMsQ0FBQyxLQUFLLEtBQUssSUFBSSxDQUFDLFNBQVM7Z0JBQUUsU0FBUztZQUNqRCxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQztTQUN2RDtRQUNELEtBQUssTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2xDLElBQUksUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQUUsU0FBUztZQUM5QixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN4QixPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ25CO0lBQ0gsQ0FBQztDQUNGO0FBM0NELDRDQTJDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGFwcCBmcm9tICcuLic7XHJcblxyXG5leHBvcnQgY2xhc3MgRW50aXR5TGlzdEZpbHRlcjxUIGV4dGVuZHMgYXBwLmFwaS5BZGFwdGVyPGFwcC5hcGkuRW50aXR5Pj4ge1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgZW50aXRpZXMgPSBuZXcgTWFwPGJpZ2ludCwgVD4oKTtcclxuICBwcml2YXRlIG5leHRUaW1lID0gMDtcclxuICBcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgQ29uc3RydWN0b3I6IG5ldyAoYWRkcmVzczogYmlnaW50KSA9PiBULFxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBzaWduaWZpZXI6IHN0cmluZykge31cclxuICBcclxuICBnZXQgbWFwKCk6IFJlYWRvbmx5TWFwPGJpZ2ludCwgVD4ge1xyXG4gICAgcmV0dXJuIHRoaXMuZW50aXRpZXM7XHJcbiAgfVxyXG5cclxuICB1cGRhdGUoY2hhbm5lbDogYXBwLmFwaS5DaGFubmVsLCBlbnRpdHlMaXN0OiBhcHAuRW50aXR5TGlzdCwgc2lnbmlmaWVyTGlzdDogYXBwLlNpZ25pZmllckxpc3QpIHtcclxuICAgIGlmICghdGhpcy5uZXh0VGltZSB8fCB0aGlzLm5leHRUaW1lIDwgRGF0ZS5ub3coKSkge1xyXG4gICAgICB0aGlzLm9uVXBkYXRlKGNoYW5uZWwsIGVudGl0eUxpc3QsIHNpZ25pZmllckxpc3QpO1xyXG4gICAgICB0aGlzLm5leHRUaW1lID0gRGF0ZS5ub3coKSArIDEwMDA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNoZWNrQ3JlYXRlKGFkZHJlc3M6IGJpZ2ludCwgY2hhbm5lbDogYXBwLmFwaS5DaGFubmVsLCBrbm93blNldDogU2V0PGJpZ2ludD4pIHtcclxuICAgIGlmICghdGhpcy5lbnRpdGllcy5oYXMoYWRkcmVzcykpIHtcclxuICAgICAgY29uc3QgZW50aXR5ID0gbmV3IHRoaXMuQ29uc3RydWN0b3IoYWRkcmVzcyk7XHJcbiAgICAgIHRoaXMuZW50aXRpZXMuc2V0KGFkZHJlc3MsIGVudGl0eSk7XHJcbiAgICAgIGNoYW5uZWwuY3JlYXRlKGVudGl0eSk7XHJcbiAgICAgIGtub3duU2V0LmFkZChhZGRyZXNzKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGtub3duU2V0LmFkZChhZGRyZXNzKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25VcGRhdGUoY2hhbm5lbDogYXBwLmFwaS5DaGFubmVsLCBlbnRpdHlMaXN0OiBhcHAuRW50aXR5TGlzdCwgc2lnbmlmaWVyTGlzdDogYXBwLlNpZ25pZmllckxpc3QpIHtcclxuICAgIGNvbnN0IGtub3duU2V0ID0gbmV3IFNldDxiaWdpbnQ+KCk7XHJcbiAgICBmb3IgKGNvbnN0IHggb2YgZW50aXR5TGlzdC5tYXAudmFsdWVzKCkpIHtcclxuICAgICAgY29uc3Qgc2lnbmlmaWVyID0gc2lnbmlmaWVyTGlzdC5nZXQoeC52YWx1ZSk7XHJcbiAgICAgIGlmIChzaWduaWZpZXIudmFsdWUgIT09IHRoaXMuc2lnbmlmaWVyKSBjb250aW51ZTtcclxuICAgICAgdGhpcy5jaGVja0NyZWF0ZSh4LnNvdXJjZS5hZGRyZXNzLCBjaGFubmVsLCBrbm93blNldCk7XHJcbiAgICB9XHJcbiAgICBmb3IgKGNvbnN0IFtrLCB2XSBvZiB0aGlzLmVudGl0aWVzKSB7XHJcbiAgICAgIGlmIChrbm93blNldC5oYXMoaykpIGNvbnRpbnVlO1xyXG4gICAgICB0aGlzLmVudGl0aWVzLmRlbGV0ZShrKTtcclxuICAgICAgY2hhbm5lbC5kZWxldGUodik7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==
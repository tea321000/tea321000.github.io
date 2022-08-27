"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainViewModel = void 0;
const app = require("lib");
const mobx = require("mobx");
const ui = require("ui");
class MainViewModel {
    constructor(renderFrame) {
        this.renderFrame = renderFrame;
        this.isLoading = true;
        this.errorMessage = '';
        this.showSettings = false;
        this.settings = new ui.settings.MainViewModel();
        mobx.makeObservable(this);
    }
    static create(renderFrame) {
        const vm = new MainViewModel(renderFrame);
        vm.connectAsync();
        return vm;
    }
    async connectAsync() {
        try {
            this.isLoading = true;
            const server = new app.api.Server();
            const version = await server.versionAsync();
            if (!version) {
                this.errorMessage = ui.language.errorDriver;
            }
            else if (version !== app.api.VERSION) {
                this.errorMessage = ui.language.errorVersion;
            }
            else if (!await this.startAsync(server)) {
                this.errorMessage = ui.language.errorProcess;
            }
            else {
                this.errorMessage = '';
            }
        }
        catch (err) {
            this.disconnect(err);
        }
        finally {
            this.isLoading = false;
        }
    }
    toggleSettings() {
        this.showSettings = !this.showSettings;
    }
    get hasError() {
        return Boolean(this.errorMessage);
    }
    disconnect(reason) {
        this.errorMessage = ui.language.error;
        console.error(reason);
    }
    async startAsync(server) {
        const core = await app.core.Core
            .createAsync(server)
            .catch(() => { });
        if (core) {
            core.runAsync(() => this.renderFrame(core, this)).catch(this.disconnect.bind(this));
            return true;
        }
        else {
            return false;
        }
    }
}
__decorate([
    mobx.action,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MainViewModel.prototype, "connectAsync", null);
__decorate([
    mobx.action,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MainViewModel.prototype, "toggleSettings", null);
__decorate([
    mobx.computed,
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], MainViewModel.prototype, "hasError", null);
__decorate([
    mobx.observable,
    __metadata("design:type", Object)
], MainViewModel.prototype, "isLoading", void 0);
__decorate([
    mobx.observable,
    __metadata("design:type", Object)
], MainViewModel.prototype, "errorMessage", void 0);
__decorate([
    mobx.observable,
    __metadata("design:type", Object)
], MainViewModel.prototype, "showSettings", void 0);
__decorate([
    mobx.observable,
    __metadata("design:type", Object)
], MainViewModel.prototype, "settings", void 0);
__decorate([
    mobx.action,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MainViewModel.prototype, "disconnect", null);
__decorate([
    mobx.action,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [app.api.Server]),
    __metadata("design:returntype", Promise)
], MainViewModel.prototype, "startAsync", null);
exports.MainViewModel = MainViewModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWFpblZpZXdNb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91aS9NYWluVmlld01vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLDJCQUEyQjtBQUMzQiw2QkFBNkI7QUFDN0IseUJBQXlCO0FBRXpCLE1BQWEsYUFBYTtJQUN4QixZQUNtQixXQUFnRTtRQUFoRSxnQkFBVyxHQUFYLFdBQVcsQ0FBcUQ7UUEyQ25GLGNBQVMsR0FBRyxJQUFJLENBQUM7UUFHakIsaUJBQVksR0FBRyxFQUFFLENBQUM7UUFHbEIsaUJBQVksR0FBRyxLQUFLLENBQUM7UUFHWixhQUFRLEdBQUcsSUFBSSxFQUFFLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBbkRsRCxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFRCxNQUFNLENBQUMsTUFBTSxDQUFDLFdBQWdFO1FBQzVFLE1BQU0sRUFBRSxHQUFHLElBQUksYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzFDLEVBQUUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNsQixPQUFPLEVBQUUsQ0FBQztJQUNaLENBQUM7SUFHSyxBQUFOLEtBQUssQ0FBQyxZQUFZO1FBQ2hCLElBQUk7WUFDRixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztZQUN0QixNQUFNLE1BQU0sR0FBRyxJQUFJLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDcEMsTUFBTSxPQUFPLEdBQUcsTUFBTSxNQUFNLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDNUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtnQkFDWixJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDO2FBQzdDO2lCQUFNLElBQUksT0FBTyxLQUFLLEdBQUcsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFO2dCQUN0QyxJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDO2FBQzlDO2lCQUFNLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7Z0JBQ3pDLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUM7YUFDOUM7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUM7YUFDeEI7U0FDRjtRQUFDLE9BQU8sR0FBRyxFQUFFO1lBQ1osSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUN0QjtnQkFBUztZQUNSLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1NBQ3hCO0lBQ0gsQ0FBQztJQUdELGNBQWM7UUFDWixJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztJQUN6QyxDQUFDO0lBRUQsSUFDSSxRQUFRO1FBQ1YsT0FBTyxPQUFPLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFlTyxVQUFVLENBQUMsTUFBZTtRQUNoQyxJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO1FBQ3RDLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDeEIsQ0FBQztJQUdhLEFBQU4sS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFzQjtRQUM3QyxNQUFNLElBQUksR0FBRyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSTthQUM3QixXQUFXLENBQUMsTUFBTSxDQUFDO2FBQ25CLEtBQUssQ0FBQyxHQUFHLEVBQUUsR0FBRSxDQUFDLENBQUMsQ0FBQztRQUNuQixJQUFJLElBQUksRUFBRTtZQUNSLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNwRixPQUFPLElBQUksQ0FBQztTQUNiO2FBQU07WUFDTCxPQUFPLEtBQUssQ0FBQztTQUNkO0lBQ0gsQ0FBQztDQUNGO0FBN0RPO0lBREwsSUFBSSxDQUFDLE1BQU07Ozs7aURBb0JYO0FBRUQ7SUFBQyxJQUFJLENBQUMsTUFBTTs7OzttREFHWDtBQUVEO0lBQUMsSUFBSSxDQUFDLFFBQVE7Ozs2Q0FHYjtBQUVEO0lBQUMsSUFBSSxDQUFDLFVBQVU7O2dEQUNDO0FBRWpCO0lBQUMsSUFBSSxDQUFDLFVBQVU7O21EQUNFO0FBRWxCO0lBQUMsSUFBSSxDQUFDLFVBQVU7O21EQUNLO0FBRXJCO0lBQUMsSUFBSSxDQUFDLFVBQVU7OytDQUNvQztBQUVwRDtJQUFDLElBQUksQ0FBQyxNQUFNOzs7OytDQUlYO0FBR2E7SUFEYixJQUFJLENBQUMsTUFBTTs7cUNBQ3FCLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTTs7K0NBVTlDO0FBekVILHNDQTBFQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGFwcCBmcm9tICdsaWInO1xyXG5pbXBvcnQgKiBhcyBtb2J4IGZyb20gJ21vYngnO1xyXG5pbXBvcnQgKiBhcyB1aSBmcm9tICd1aSc7XHJcblxyXG5leHBvcnQgY2xhc3MgTWFpblZpZXdNb2RlbCB7XHJcbiAgcHJpdmF0ZSBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgcmVuZGVyRnJhbWU6IChjb3JlOiBhcHAuY29yZS5Db3JlLCB2bTogdWkuTWFpblZpZXdNb2RlbCkgPT4gdm9pZCkge1xyXG4gICAgbW9ieC5tYWtlT2JzZXJ2YWJsZSh0aGlzKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBjcmVhdGUocmVuZGVyRnJhbWU6IChjb3JlOiBhcHAuY29yZS5Db3JlLCB2bTogdWkuTWFpblZpZXdNb2RlbCkgPT4gdm9pZCkge1xyXG4gICAgY29uc3Qgdm0gPSBuZXcgTWFpblZpZXdNb2RlbChyZW5kZXJGcmFtZSk7XHJcbiAgICB2bS5jb25uZWN0QXN5bmMoKTtcclxuICAgIHJldHVybiB2bTtcclxuICB9XHJcblxyXG4gIEBtb2J4LmFjdGlvblxyXG4gIGFzeW5jIGNvbm5lY3RBc3luYygpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgY29uc3Qgc2VydmVyID0gbmV3IGFwcC5hcGkuU2VydmVyKCk7XHJcbiAgICAgIGNvbnN0IHZlcnNpb24gPSBhd2FpdCBzZXJ2ZXIudmVyc2lvbkFzeW5jKCk7XHJcbiAgICAgIGlmICghdmVyc2lvbikge1xyXG4gICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gdWkubGFuZ3VhZ2UuZXJyb3JEcml2ZXI7XHJcbiAgICAgIH0gZWxzZSBpZiAodmVyc2lvbiAhPT0gYXBwLmFwaS5WRVJTSU9OKSB7XHJcbiAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSB1aS5sYW5ndWFnZS5lcnJvclZlcnNpb247XHJcbiAgICAgIH0gZWxzZSBpZiAoIWF3YWl0IHRoaXMuc3RhcnRBc3luYyhzZXJ2ZXIpKSB7XHJcbiAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSB1aS5sYW5ndWFnZS5lcnJvclByb2Nlc3M7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSAnJztcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIHRoaXMuZGlzY29ubmVjdChlcnIpO1xyXG4gICAgfSBmaW5hbGx5IHtcclxuICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBtb2J4LmFjdGlvblxyXG4gIHRvZ2dsZVNldHRpbmdzKCkge1xyXG4gICAgdGhpcy5zaG93U2V0dGluZ3MgPSAhdGhpcy5zaG93U2V0dGluZ3M7XHJcbiAgfVxyXG5cclxuICBAbW9ieC5jb21wdXRlZFxyXG4gIGdldCBoYXNFcnJvcigpIHtcclxuICAgIHJldHVybiBCb29sZWFuKHRoaXMuZXJyb3JNZXNzYWdlKTtcclxuICB9XHJcblxyXG4gIEBtb2J4Lm9ic2VydmFibGVcclxuICBpc0xvYWRpbmcgPSB0cnVlO1xyXG5cclxuICBAbW9ieC5vYnNlcnZhYmxlXHJcbiAgZXJyb3JNZXNzYWdlID0gJyc7XHJcblxyXG4gIEBtb2J4Lm9ic2VydmFibGVcclxuICBzaG93U2V0dGluZ3MgPSBmYWxzZTtcclxuXHJcbiAgQG1vYngub2JzZXJ2YWJsZVxyXG4gIHJlYWRvbmx5IHNldHRpbmdzID0gbmV3IHVpLnNldHRpbmdzLk1haW5WaWV3TW9kZWwoKTtcclxuXHJcbiAgQG1vYnguYWN0aW9uXHJcbiAgcHJpdmF0ZSBkaXNjb25uZWN0KHJlYXNvbjogdW5rbm93bikge1xyXG4gICAgdGhpcy5lcnJvck1lc3NhZ2UgPSB1aS5sYW5ndWFnZS5lcnJvcjtcclxuICAgIGNvbnNvbGUuZXJyb3IocmVhc29uKTtcclxuICB9XHJcblxyXG4gIEBtb2J4LmFjdGlvblxyXG4gIHByaXZhdGUgYXN5bmMgc3RhcnRBc3luYyhzZXJ2ZXI6IGFwcC5hcGkuU2VydmVyKSB7XHJcbiAgICBjb25zdCBjb3JlID0gYXdhaXQgYXBwLmNvcmUuQ29yZVxyXG4gICAgICAuY3JlYXRlQXN5bmMoc2VydmVyKVxyXG4gICAgICAuY2F0Y2goKCkgPT4ge30pO1xyXG4gICAgaWYgKGNvcmUpIHtcclxuICAgICAgY29yZS5ydW5Bc3luYygoKSA9PiB0aGlzLnJlbmRlckZyYW1lKGNvcmUsIHRoaXMpKS5jYXRjaCh0aGlzLmRpc2Nvbm5lY3QuYmluZCh0aGlzKSk7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=
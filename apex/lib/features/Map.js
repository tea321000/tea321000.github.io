"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Map = void 0;
class Map {
    constructor(canvas) {
        this.canvas = canvas;
        this.image = new Image();
        this.ratioX = 0;
        this.ratioY = 0;
        this.scaleR = 0;
        this.scaleX = 0;
        this.scaleY = 0;
        this.shiftX = 0;
        this.shiftY = 0;
        this.context = canvas.getContext('2d');
    }
    refresh(levelName) {
        this.fetch(levelName);
        this.update();
        this.renderBackground();
    }
    renderAll(localPlayer, players) {
        for (const x of players) {
            this.renderOne(x.localOrigin.value, x.createColor(localPlayer));
        }
    }
    renderOne(localOrigin, style) {
        if (!this.map)
            return;
        const x = this.shiftX + (1 / this.image.width * this.scaleX) * (localOrigin.x - this.map.x) / this.ratioX;
        const y = this.shiftY + (1 / this.image.height * this.scaleY) * (localOrigin.y - this.map.y) / -this.ratioY;
        this.context.beginPath();
        this.context.arc(x, y, this.scaleR * 8, 0, Math.PI * 2);
        this.context.fillStyle = style;
        this.context.fill();
    }
    fetch(levelName) {
        this.map = getDataByLevelName(levelName);
        this.image.src = this.map ? `images/maps/${levelName}.webp` : 'images/maps.webp';
    }
    renderBackground() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.context.drawImage(this.image, 0, 0, this.image.width, this.image.height, this.shiftX, this.shiftY, this.scaleX, this.scaleY);
    }
    update() {
        if (!this.map)
            return;
        this.ratioX = (this.map.y - this.map.x) / this.image.width;
        this.ratioY = (this.map.y - this.map.x) / this.image.height;
        this.scaleR = Math.min(this.canvas.width / this.image.width, this.canvas.height / this.image.height);
        this.scaleX = this.image.width * this.scaleR;
        this.scaleY = this.image.height * this.scaleR;
        this.shiftX = (this.canvas.width - this.scaleX) / 2;
        this.shiftY = (this.canvas.height - this.scaleY) / 2;
    }
}
exports.Map = Map;
function getDataByLevelName(levelName) {
    switch (levelName) {
        case 'mp_rr_canyonlands_mu3':
            return { x: -37541, y: 43886 };
        case 'mp_rr_desertlands_mu3':
            return { x: -45056, y: 45055 };
        case 'mp_rr_olympus_mu2':
            return { x: -52024, y: 48025 };
        case 'mp_rr_tropic_island_mu1':
            return { x: -50606, y: 52139 };
        default:
            return;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWFwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xpYi9mZWF0dXJlcy9NYXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBRUEsTUFBYSxHQUFHO0lBWWQsWUFDbUIsTUFBeUI7UUFBekIsV0FBTSxHQUFOLE1BQU0sQ0FBbUI7UUFYM0IsVUFBSyxHQUFHLElBQUksS0FBSyxFQUFFLENBQUM7UUFFN0IsV0FBTSxHQUFHLENBQUMsQ0FBQztRQUNYLFdBQU0sR0FBRyxDQUFDLENBQUM7UUFDWCxXQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ1gsV0FBTSxHQUFHLENBQUMsQ0FBQztRQUNYLFdBQU0sR0FBRyxDQUFDLENBQUM7UUFDWCxXQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ1gsV0FBTSxHQUFHLENBQUMsQ0FBQztRQUlqQixJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFFLENBQUM7SUFDMUMsQ0FBQztJQUVELE9BQU8sQ0FBQyxTQUFpQjtRQUN2QixJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNkLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFRCxTQUFTLENBQUMsV0FBNEIsRUFBRSxPQUErQjtRQUNyRSxLQUFLLE1BQU0sQ0FBQyxJQUFJLE9BQU8sRUFBRTtZQUN2QixJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztTQUNqRTtJQUNILENBQUM7SUFFRCxTQUFTLENBQUMsV0FBNkIsRUFBRSxLQUE4QztRQUNyRixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUc7WUFBRSxPQUFPO1FBQ3RCLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDMUcsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQzVHLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN4RCxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDL0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRU8sS0FBSyxDQUFDLFNBQWlCO1FBQzdCLElBQUksQ0FBQyxHQUFHLEdBQUcsa0JBQWtCLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsZUFBZSxTQUFTLE9BQU8sQ0FBQyxDQUFDLENBQUMsa0JBQWtCLENBQUM7SUFDbkYsQ0FBQztJQUVPLGdCQUFnQjtRQUN0QixJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDcEUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNuSSxDQUFDO0lBRU8sTUFBTTtRQUNaLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRztZQUFFLE9BQU87UUFDdEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFDM0QsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7UUFDNUQsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDckcsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQzdDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUM5QyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNwRCxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN2RCxDQUFDO0NBQ0Y7QUEzREQsa0JBMkRDO0FBRUQsU0FBUyxrQkFBa0IsQ0FBQyxTQUFpQjtJQUMzQyxRQUFRLFNBQVMsRUFBRTtRQUNqQixLQUFLLHVCQUF1QjtZQUMxQixPQUFPLEVBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUMsQ0FBQztRQUMvQixLQUFLLHVCQUF1QjtZQUMxQixPQUFPLEVBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUMsQ0FBQztRQUMvQixLQUFLLG1CQUFtQjtZQUN0QixPQUFPLEVBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUMsQ0FBQztRQUMvQixLQUFLLHlCQUF5QjtZQUM1QixPQUFPLEVBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUMsQ0FBQztRQUMvQjtZQUNFLE9BQU87S0FDVjtBQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBhcHAgZnJvbSAnLic7XHJcblxyXG5leHBvcnQgY2xhc3MgTWFwIHtcclxuICBwcml2YXRlIHJlYWRvbmx5IGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcclxuICBwcml2YXRlIHJlYWRvbmx5IGltYWdlID0gbmV3IEltYWdlKCk7XHJcbiAgcHJpdmF0ZSBtYXA/OiBSZXR1cm5UeXBlPHR5cGVvZiBnZXREYXRhQnlMZXZlbE5hbWU+O1xyXG4gIHByaXZhdGUgcmF0aW9YID0gMDtcclxuICBwcml2YXRlIHJhdGlvWSA9IDA7XHJcbiAgcHJpdmF0ZSBzY2FsZVIgPSAwO1xyXG4gIHByaXZhdGUgc2NhbGVYID0gMDtcclxuICBwcml2YXRlIHNjYWxlWSA9IDA7XHJcbiAgcHJpdmF0ZSBzaGlmdFggPSAwO1xyXG4gIHByaXZhdGUgc2hpZnRZID0gMDtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQpIHtcclxuICAgIHRoaXMuY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpITtcclxuICB9XHJcblxyXG4gIHJlZnJlc2gobGV2ZWxOYW1lOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuZmV0Y2gobGV2ZWxOYW1lKTtcclxuICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgICB0aGlzLnJlbmRlckJhY2tncm91bmQoKTtcclxuICB9XHJcblxyXG4gIHJlbmRlckFsbChsb2NhbFBsYXllcjogYXBwLmNvcmUuUGxheWVyLCBwbGF5ZXJzOiBBcnJheTxhcHAuY29yZS5QbGF5ZXI+KSB7XHJcbiAgICBmb3IgKGNvbnN0IHggb2YgcGxheWVycykge1xyXG4gICAgICB0aGlzLnJlbmRlck9uZSh4LmxvY2FsT3JpZ2luLnZhbHVlLCB4LmNyZWF0ZUNvbG9yKGxvY2FsUGxheWVyKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW5kZXJPbmUobG9jYWxPcmlnaW46IGFwcC5jb3JlLklWZWN0b3IsIHN0eWxlOiBzdHJpbmcgfCBDYW52YXNHcmFkaWVudCB8IENhbnZhc1BhdHRlcm4pIHtcclxuICAgIGlmICghdGhpcy5tYXApIHJldHVybjtcclxuICAgIGNvbnN0IHggPSB0aGlzLnNoaWZ0WCArICgxIC8gdGhpcy5pbWFnZS53aWR0aCAqIHRoaXMuc2NhbGVYKSAqIChsb2NhbE9yaWdpbi54IC0gdGhpcy5tYXAueCkgLyB0aGlzLnJhdGlvWDtcclxuICAgIGNvbnN0IHkgPSB0aGlzLnNoaWZ0WSArICgxIC8gdGhpcy5pbWFnZS5oZWlnaHQgKiB0aGlzLnNjYWxlWSkgKiAobG9jYWxPcmlnaW4ueSAtIHRoaXMubWFwLnkpIC8gLXRoaXMucmF0aW9ZO1xyXG4gICAgdGhpcy5jb250ZXh0LmJlZ2luUGF0aCgpO1xyXG4gICAgdGhpcy5jb250ZXh0LmFyYyh4LCB5LCB0aGlzLnNjYWxlUiAqIDgsIDAsIE1hdGguUEkgKiAyKTtcclxuICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSBzdHlsZTtcclxuICAgIHRoaXMuY29udGV4dC5maWxsKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGZldGNoKGxldmVsTmFtZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLm1hcCA9IGdldERhdGFCeUxldmVsTmFtZShsZXZlbE5hbWUpO1xyXG4gICAgdGhpcy5pbWFnZS5zcmMgPSB0aGlzLm1hcCA/IGBpbWFnZXMvbWFwcy8ke2xldmVsTmFtZX0ud2VicGAgOiAnaW1hZ2VzL21hcHMud2VicCc7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlbmRlckJhY2tncm91bmQoKSB7XHJcbiAgICB0aGlzLmNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xyXG4gICAgdGhpcy5jb250ZXh0LmRyYXdJbWFnZSh0aGlzLmltYWdlLCAwLDAsIHRoaXMuaW1hZ2Uud2lkdGgsIHRoaXMuaW1hZ2UuaGVpZ2h0LCB0aGlzLnNoaWZ0WCwgdGhpcy5zaGlmdFksIHRoaXMuc2NhbGVYLCB0aGlzLnNjYWxlWSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHVwZGF0ZSgpIHtcclxuICAgIGlmICghdGhpcy5tYXApIHJldHVybjtcclxuICAgIHRoaXMucmF0aW9YID0gKHRoaXMubWFwLnkgLSB0aGlzLm1hcC54KSAvIHRoaXMuaW1hZ2Uud2lkdGg7XHJcbiAgICB0aGlzLnJhdGlvWSA9ICh0aGlzLm1hcC55IC0gdGhpcy5tYXAueCkgLyB0aGlzLmltYWdlLmhlaWdodDtcclxuICAgIHRoaXMuc2NhbGVSID0gTWF0aC5taW4odGhpcy5jYW52YXMud2lkdGggLyB0aGlzLmltYWdlLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQgLyB0aGlzLmltYWdlLmhlaWdodCk7XHJcbiAgICB0aGlzLnNjYWxlWCA9IHRoaXMuaW1hZ2Uud2lkdGggKiB0aGlzLnNjYWxlUjtcclxuICAgIHRoaXMuc2NhbGVZID0gdGhpcy5pbWFnZS5oZWlnaHQgKiB0aGlzLnNjYWxlUjtcclxuICAgIHRoaXMuc2hpZnRYID0gKHRoaXMuY2FudmFzLndpZHRoIC0gdGhpcy5zY2FsZVgpIC8gMjtcclxuICAgIHRoaXMuc2hpZnRZID0gKHRoaXMuY2FudmFzLmhlaWdodCAtIHRoaXMuc2NhbGVZKSAvIDI7ICBcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldERhdGFCeUxldmVsTmFtZShsZXZlbE5hbWU6IHN0cmluZykge1xyXG4gIHN3aXRjaCAobGV2ZWxOYW1lKSB7XHJcbiAgICBjYXNlICdtcF9ycl9jYW55b25sYW5kc19tdTMnOlxyXG4gICAgICByZXR1cm4ge3g6IC0zNzU0MSwgeTogNDM4ODZ9O1xyXG4gICAgY2FzZSAnbXBfcnJfZGVzZXJ0bGFuZHNfbXUzJzpcclxuICAgICAgcmV0dXJuIHt4OiAtNDUwNTYsIHk6IDQ1MDU1fTtcclxuICAgIGNhc2UgJ21wX3JyX29seW1wdXNfbXUyJzpcclxuICAgICAgcmV0dXJuIHt4OiAtNTIwMjQsIHk6IDQ4MDI1fTtcclxuICAgIGNhc2UgJ21wX3JyX3Ryb3BpY19pc2xhbmRfbXUxJzpcclxuICAgICAgcmV0dXJuIHt4OiAtNTA2MDYsIHk6IDUyMTM5fTtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybjtcclxuICB9XHJcbn1cclxuIl19
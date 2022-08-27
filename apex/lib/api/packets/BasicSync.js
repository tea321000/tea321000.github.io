"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasicSync = void 0;
const app = require("..");
class BasicSync {
    constructor(id) {
        this.id = id;
    }
    static create(stream) {
        const id = stream.readUInt8();
        return new BasicSync(id);
    }
    write(stream) {
        stream.writeUInt8(app.PacketType.BasicSync);
        stream.writeUInt8(this.id);
    }
}
exports.BasicSync = BasicSync;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzaWNTeW5jLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9hcGkvcGFja2V0cy9CYXNpY1N5bmMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsMEJBQTBCO0FBRTFCLE1BQWEsU0FBUztJQUNwQixZQUNXLEVBQVU7UUFBVixPQUFFLEdBQUYsRUFBRSxDQUFRO0lBQUcsQ0FBQztJQUV6QixNQUFNLENBQUMsTUFBTSxDQUFDLE1BQXdCO1FBQ3BDLE1BQU0sRUFBRSxHQUFHLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUM5QixPQUFPLElBQUksU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFFRCxLQUFLLENBQUMsTUFBd0I7UUFDNUIsTUFBTSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzVDLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzdCLENBQUM7Q0FDRjtBQWJELDhCQWFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgYXBwIGZyb20gJy4uJztcclxuXHJcbmV4cG9ydCBjbGFzcyBCYXNpY1N5bmMgaW1wbGVtZW50cyBhcHAuSVBhY2tldFdyaXRlciB7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICByZWFkb25seSBpZDogbnVtYmVyKSB7fVxyXG5cclxuICBzdGF0aWMgY3JlYXRlKHN0cmVhbTogYXBwLkJpbmFyeVJlYWRlcikge1xyXG4gICAgY29uc3QgaWQgPSBzdHJlYW0ucmVhZFVJbnQ4KCk7XHJcbiAgICByZXR1cm4gbmV3IEJhc2ljU3luYyhpZCk7XHJcbiAgfVxyXG5cclxuICB3cml0ZShzdHJlYW06IGFwcC5CaW5hcnlXcml0ZXIpIHtcclxuICAgIHN0cmVhbS53cml0ZVVJbnQ4KGFwcC5QYWNrZXRUeXBlLkJhc2ljU3luYyk7XHJcbiAgICBzdHJlYW0ud3JpdGVVSW50OCh0aGlzLmlkKTtcclxuICB9XHJcbn1cclxuIl19
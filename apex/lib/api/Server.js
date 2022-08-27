"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const app = require(".");
class Server {
    async processesAsync() {
        const response = await fetch('/api/proc');
        const result = await response.json();
        return result.map(x => new app.Process(x));
    }
    async versionAsync() {
        const response = await fetch('/api/version');
        const value = await response.json().catch(() => 0);
        return value;
    }
}
exports.Server = Server;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VydmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xpYi9hcGkvU2VydmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHlCQUF5QjtBQUV6QixNQUFhLE1BQU07SUFDakIsS0FBSyxDQUFDLGNBQWM7UUFDbEIsTUFBTSxRQUFRLEdBQUcsTUFBTSxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDMUMsTUFBTSxNQUFNLEdBQUcsTUFBTSxRQUFRLENBQUMsSUFBSSxFQUF5QixDQUFDO1FBQzVELE9BQU8sTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFRCxLQUFLLENBQUMsWUFBWTtRQUNoQixNQUFNLFFBQVEsR0FBRyxNQUFNLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUM3QyxNQUFNLEtBQUssR0FBRyxNQUFNLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFXLENBQUM7UUFDN0QsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0NBQ0Y7QUFaRCx3QkFZQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGFwcCBmcm9tICcuJztcclxuXHJcbmV4cG9ydCBjbGFzcyBTZXJ2ZXIge1xyXG4gIGFzeW5jIHByb2Nlc3Nlc0FzeW5jKCkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2FwaS9wcm9jJyk7XHJcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKCkgYXMgQXJyYXk8YXBwLklQcm9jZXNzPjtcclxuICAgIHJldHVybiByZXN1bHQubWFwKHggPT4gbmV3IGFwcC5Qcm9jZXNzKHgpKTtcclxuICB9XHJcblxyXG4gIGFzeW5jIHZlcnNpb25Bc3luYygpIHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvdmVyc2lvbicpO1xyXG4gICAgY29uc3QgdmFsdWUgPSBhd2FpdCByZXNwb25zZS5qc29uKCkuY2F0Y2goKCkgPT4gMCkgYXMgTnVtYmVyO1xyXG4gICAgcmV0dXJuIHZhbHVlO1xyXG4gIH1cclxufVxyXG4iXX0=
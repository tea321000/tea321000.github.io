"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const mobx = require("mobx");
const React = require("react");
const ReactDOM = require("react-dom");
const ui = require("ui");
const Runner_1 = require("./Runner");
const packageData = require('../package');
function App() {
    return (React.createElement(ui.material.ThemeProvider, { theme: theme },
        React.createElement(ui.material.CssBaseline, null),
        React.createElement(ui.MainView, { vm: ui.MainViewModel.create(Runner_1.Runner.create()) })));
}
const theme = ui.material.createTheme({
    palette: {
        mode: 'dark',
        primary: { main: '#4CAF50' }
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                html: {
                    backgroundColor: '#333'
                },
                body: {
                    backgroundColor: '#333',
                },
                canvas: {
                    display: 'none',
                    position: 'fixed'
                },
                '::-webkit-scrollbar': {
                    width: '12px'
                },
                '::-webkit-scrollbar-track': {
                    backgroundColor: '#333'
                },
                '::-webkit-scrollbar-thumb': {
                    backgroundColor: '#4CAF50',
                    border: '4px solid #333',
                    borderRadius: '12px'
                }
            }
        }
    }
});
(function () {
    document.title = `${packageData.name} (${packageData.version})`;
    mobx.configure({ enforceActions: 'never' });
    ReactDOM.render(React.createElement(App, null), document.getElementById('container'));
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2FwcC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw0QkFBMEI7QUFDMUIsNkJBQTZCO0FBQzdCLCtCQUErQjtBQUMvQixzQ0FBc0M7QUFDdEMseUJBQXlCO0FBQ3pCLHFDQUFnQztBQUNoQyxNQUFNLFdBQVcsR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7QUFFMUMsU0FBUyxHQUFHO0lBQ1YsT0FBTyxDQUNMLG9CQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsYUFBYSxJQUFDLEtBQUssRUFBRSxLQUFLO1FBQ3JDLG9CQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsV0FBVyxPQUFHO1FBQzNCLG9CQUFDLEVBQUUsQ0FBQyxRQUFRLElBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLGVBQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFJLENBQ25DLENBQzdCLENBQUM7QUFDSixDQUFDO0FBRUQsTUFBTSxLQUFLLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUM7SUFDcEMsT0FBTyxFQUFFO1FBQ1AsSUFBSSxFQUFFLE1BQU07UUFDWixPQUFPLEVBQUUsRUFBQyxJQUFJLEVBQUUsU0FBUyxFQUFDO0tBQzNCO0lBQ0QsVUFBVSxFQUFFO1FBQ1YsY0FBYyxFQUFFO1lBQ2QsY0FBYyxFQUFFO2dCQUNkLElBQUksRUFBRTtvQkFDSixlQUFlLEVBQUUsTUFBTTtpQkFDeEI7Z0JBQ0QsSUFBSSxFQUFFO29CQUNKLGVBQWUsRUFBRSxNQUFNO2lCQUN4QjtnQkFDRCxNQUFNLEVBQUU7b0JBQ04sT0FBTyxFQUFFLE1BQU07b0JBQ2YsUUFBUSxFQUFFLE9BQU87aUJBQ2xCO2dCQUNELHFCQUFxQixFQUFFO29CQUNyQixLQUFLLEVBQUUsTUFBTTtpQkFDZDtnQkFDRCwyQkFBMkIsRUFBRTtvQkFDM0IsZUFBZSxFQUFFLE1BQU07aUJBQ3hCO2dCQUNELDJCQUEyQixFQUFFO29CQUMzQixlQUFlLEVBQUUsU0FBUztvQkFDMUIsTUFBTSxFQUFFLGdCQUFnQjtvQkFDeEIsWUFBWSxFQUFFLE1BQU07aUJBQ3JCO2FBQ0Y7U0FDRjtLQUNGO0NBQ0YsQ0FBQyxDQUFDO0FBRUgsQ0FBQztJQUNDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsR0FBRyxXQUFXLENBQUMsSUFBSSxLQUFLLFdBQVcsQ0FBQyxPQUFPLEdBQUcsQ0FBQztJQUNoRSxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUMsY0FBYyxFQUFFLE9BQU8sRUFBQyxDQUFDLENBQUM7SUFDMUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxvQkFBQyxHQUFHLE9BQUcsRUFBRSxRQUFRLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7QUFDakUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAncmVmbGVjdC1tZXRhZGF0YSc7XHJcbmltcG9ydCAqIGFzIG1vYnggZnJvbSAnbW9ieCc7XHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0ICogYXMgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcclxuaW1wb3J0ICogYXMgdWkgZnJvbSAndWknO1xyXG5pbXBvcnQge1J1bm5lcn0gZnJvbSAnLi9SdW5uZXInO1xyXG5jb25zdCBwYWNrYWdlRGF0YSA9IHJlcXVpcmUoJy4uL3BhY2thZ2UnKTtcclxuXHJcbmZ1bmN0aW9uIEFwcCgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPHVpLm1hdGVyaWFsLlRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cclxuICAgICAgPHVpLm1hdGVyaWFsLkNzc0Jhc2VsaW5lIC8+XHJcbiAgICAgIDx1aS5NYWluVmlldyB2bT17dWkuTWFpblZpZXdNb2RlbC5jcmVhdGUoUnVubmVyLmNyZWF0ZSgpKX0gLz5cclxuICAgIDwvdWkubWF0ZXJpYWwuVGhlbWVQcm92aWRlcj5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCB0aGVtZSA9IHVpLm1hdGVyaWFsLmNyZWF0ZVRoZW1lKHtcclxuICBwYWxldHRlOiB7XHJcbiAgICBtb2RlOiAnZGFyaycsXHJcbiAgICBwcmltYXJ5OiB7bWFpbjogJyM0Q0FGNTAnfVxyXG4gIH0sXHJcbiAgY29tcG9uZW50czoge1xyXG4gICAgTXVpQ3NzQmFzZWxpbmU6IHtcclxuICAgICAgc3R5bGVPdmVycmlkZXM6IHtcclxuICAgICAgICBodG1sOiB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMzMzJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm9keToge1xyXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzMzMycsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjYW52YXM6IHtcclxuICAgICAgICAgIGRpc3BsYXk6ICdub25lJywgXHJcbiAgICAgICAgICBwb3NpdGlvbjogJ2ZpeGVkJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgJzo6LXdlYmtpdC1zY3JvbGxiYXInOiB7XHJcbiAgICAgICAgICB3aWR0aDogJzEycHgnXHJcbiAgICAgICAgfSxcclxuICAgICAgICAnOjotd2Via2l0LXNjcm9sbGJhci10cmFjayc6IHtcclxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyMzMzMnXHJcbiAgICAgICAgfSxcclxuICAgICAgICAnOjotd2Via2l0LXNjcm9sbGJhci10aHVtYic6IHtcclxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyM0Q0FGNTAnLFxyXG4gICAgICAgICAgYm9yZGVyOiAnNHB4IHNvbGlkICMzMzMnLFxyXG4gICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMTJweCdcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn0pO1xyXG5cclxuKGZ1bmN0aW9uKCkge1xyXG4gIGRvY3VtZW50LnRpdGxlID0gYCR7cGFja2FnZURhdGEubmFtZX0gKCR7cGFja2FnZURhdGEudmVyc2lvbn0pYDtcclxuICBtb2J4LmNvbmZpZ3VyZSh7ZW5mb3JjZUFjdGlvbnM6ICduZXZlcid9KTtcclxuICBSZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhaW5lcicpKTtcclxufSkoKTtcclxuIl19
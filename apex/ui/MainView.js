"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainView = void 0;
const React = require("react");
const ui = require("ui");
const Close_1 = require("@mui/icons-material/Close");
const Settings_1 = require("@mui/icons-material/Settings");
exports.MainView = ui.createView(({ vm }) => (React.createElement(ui.material.Box, { sx: styles.container },
    vm.hasError && React.createElement(ui.material.Box, { sx: styles.error },
        React.createElement(ui.material.Typography, null, vm.errorMessage),
        React.createElement(ui.material.Button, { onClick: () => vm.connectAsync() }, ui.language.reconnect)),
    vm.isLoading && React.createElement(ui.material.Backdrop, { open: true },
        React.createElement(ui.material.CircularProgress, { sx: styles.progress })),
    !vm.hasError && !vm.isLoading && React.createElement(React.Fragment, null,
        vm.showSettings
            ? React.createElement(ui.settings.MainView, { vm: vm.settings })
            : React.createElement(ui.main.MainView, null),
        React.createElement(ui.material.IconButton, { sx: styles.toggle, onClick: () => vm.toggleSettings() }, vm.showSettings ? React.createElement(Close_1.default, null) : React.createElement(Settings_1.default, null))))));
const styles = {
    container: {
        height: '100vh',
        overflowX: 'hidden',
        overflowY: 'scroll',
        userSelect: 'none'
    },
    error: {
        textAlign: 'center',
        width: '100%',
        position: 'fixed',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)'
    },
    progress: {
        position: 'fixed',
        left: 'calc(50% - 20px)',
        top: 'calc(50% - 20px)'
    },
    toggle: {
        position: 'fixed',
        right: '12px',
        top: '12px'
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWFpblZpZXcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdWkvTWFpblZpZXcudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLCtCQUErQjtBQUMvQix5QkFBeUI7QUFDekIscURBQThDO0FBQzlDLDJEQUFvRDtBQUV2QyxRQUFBLFFBQVEsR0FBRyxFQUFFLENBQUMsVUFBVSxDQUF5QixDQUFDLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBRSxDQUFDLENBQ3RFLG9CQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsR0FBRyxJQUFDLEVBQUUsRUFBRSxNQUFNLENBQUMsU0FBUztJQUNsQyxFQUFFLENBQUMsUUFBUSxJQUFJLG9CQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsR0FBRyxJQUFDLEVBQUUsRUFBRSxNQUFNLENBQUMsS0FBSztRQUMvQyxvQkFBQyxFQUFFLENBQUMsUUFBUSxDQUFDLFVBQVUsUUFDcEIsRUFBRSxDQUFDLFlBQVksQ0FDTztRQUN6QixvQkFBQyxFQUFFLENBQUMsUUFBUSxDQUFDLE1BQU0sSUFBQyxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLFlBQVksRUFBRSxJQUNqRCxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FDSCxDQUNMO0lBQ2pCLEVBQUUsQ0FBQyxTQUFTLElBQUksb0JBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxRQUFRLElBQUMsSUFBSTtRQUN6QyxvQkFBQyxFQUFFLENBQUMsUUFBUSxDQUFDLGdCQUFnQixJQUFDLEVBQUUsRUFBRSxNQUFNLENBQUMsUUFBUSxHQUFJLENBQ2hDO0lBQ3RCLENBQUMsRUFBRSxDQUFDLFFBQVEsSUFBSSxDQUFDLEVBQUUsQ0FBQyxTQUFTLElBQUksb0JBQUMsS0FBSyxDQUFDLFFBQVE7UUFDOUMsRUFBRSxDQUFDLFlBQVk7WUFDZCxDQUFDLENBQUMsb0JBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxRQUFRLElBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxRQUFRLEdBQUk7WUFDM0MsQ0FBQyxDQUFDLG9CQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxPQUFHO1FBQ3hCLG9CQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsVUFBVSxJQUFDLEVBQUUsRUFBRSxNQUFNLENBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsY0FBYyxFQUFFLElBQzFFLEVBQUUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLG9CQUFDLGVBQUssT0FBRyxDQUFDLENBQUMsQ0FBQyxvQkFBQyxrQkFBUSxPQUFHLENBQ3BCLENBQ1YsQ0FDRCxDQUNuQixDQUFDLENBQUM7QUFFSCxNQUFNLE1BQU0sR0FBRztJQUNiLFNBQVMsRUFBRTtRQUNULE1BQU0sRUFBRSxPQUFPO1FBQ2YsU0FBUyxFQUFFLFFBQVE7UUFDbkIsU0FBUyxFQUFFLFFBQVE7UUFDbkIsVUFBVSxFQUFFLE1BQU07S0FDbkI7SUFDRCxLQUFLLEVBQUU7UUFDTCxTQUFTLEVBQUUsUUFBUTtRQUNuQixLQUFLLEVBQUUsTUFBTTtRQUNiLFFBQVEsRUFBRSxPQUFPO1FBQ2pCLElBQUksRUFBRSxLQUFLO1FBQ1gsR0FBRyxFQUFFLEtBQUs7UUFDVixTQUFTLEVBQUUsdUJBQXVCO0tBQ25DO0lBQ0QsUUFBUSxFQUFFO1FBQ1IsUUFBUSxFQUFFLE9BQU87UUFDakIsSUFBSSxFQUFFLGtCQUFrQjtRQUN4QixHQUFHLEVBQUUsa0JBQWtCO0tBQ3hCO0lBQ0QsTUFBTSxFQUFFO1FBQ04sUUFBUSxFQUFFLE9BQU87UUFDakIsS0FBSyxFQUFFLE1BQU07UUFDYixHQUFHLEVBQUUsTUFBTTtLQUNaO0NBQ0YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0ICogYXMgdWkgZnJvbSAndWknO1xyXG5pbXBvcnQgQ2xvc2UgZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9DbG9zZSc7XHJcbmltcG9ydCBTZXR0aW5ncyBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL1NldHRpbmdzJztcclxuXHJcbmV4cG9ydCBjb25zdCBNYWluVmlldyA9IHVpLmNyZWF0ZVZpZXc8e3ZtOiB1aS5NYWluVmlld01vZGVsfT4oKHt2bX0pID0+IChcclxuICA8dWkubWF0ZXJpYWwuQm94IHN4PXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgIHt2bS5oYXNFcnJvciAmJiA8dWkubWF0ZXJpYWwuQm94IHN4PXtzdHlsZXMuZXJyb3J9PlxyXG4gICAgICA8dWkubWF0ZXJpYWwuVHlwb2dyYXBoeT5cclxuICAgICAgICB7dm0uZXJyb3JNZXNzYWdlfVxyXG4gICAgICA8L3VpLm1hdGVyaWFsLlR5cG9ncmFwaHk+XHJcbiAgICAgIDx1aS5tYXRlcmlhbC5CdXR0b24gb25DbGljaz17KCkgPT4gdm0uY29ubmVjdEFzeW5jKCl9PlxyXG4gICAgICAgIHt1aS5sYW5ndWFnZS5yZWNvbm5lY3R9XHJcbiAgICAgIDwvdWkubWF0ZXJpYWwuQnV0dG9uPlxyXG4gICAgPC91aS5tYXRlcmlhbC5Cb3g+fVxyXG4gICAge3ZtLmlzTG9hZGluZyAmJiA8dWkubWF0ZXJpYWwuQmFja2Ryb3Agb3Blbj5cclxuICAgICAgPHVpLm1hdGVyaWFsLkNpcmN1bGFyUHJvZ3Jlc3Mgc3g9e3N0eWxlcy5wcm9ncmVzc30gLz5cclxuICAgIDwvdWkubWF0ZXJpYWwuQmFja2Ryb3A+fVxyXG4gICAgeyF2bS5oYXNFcnJvciAmJiAhdm0uaXNMb2FkaW5nICYmIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAge3ZtLnNob3dTZXR0aW5nc1xyXG4gICAgICAgID8gPHVpLnNldHRpbmdzLk1haW5WaWV3IHZtPXt2bS5zZXR0aW5nc30gLz5cclxuICAgICAgICA6IDx1aS5tYWluLk1haW5WaWV3IC8+fVxyXG4gICAgICA8dWkubWF0ZXJpYWwuSWNvbkJ1dHRvbiBzeD17c3R5bGVzLnRvZ2dsZX0gb25DbGljaz17KCkgPT4gdm0udG9nZ2xlU2V0dGluZ3MoKX0+XHJcbiAgICAgICAge3ZtLnNob3dTZXR0aW5ncyA/IDxDbG9zZSAvPiA6IDxTZXR0aW5ncyAvPn1cclxuICAgICAgPC91aS5tYXRlcmlhbC5JY29uQnV0dG9uPlxyXG4gICAgPC9SZWFjdC5GcmFnbWVudD59XHJcbiAgPC91aS5tYXRlcmlhbC5Cb3g+XHJcbikpO1xyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIGNvbnRhaW5lcjoge1xyXG4gICAgaGVpZ2h0OiAnMTAwdmgnLFxyXG4gICAgb3ZlcmZsb3dYOiAnaGlkZGVuJyxcclxuICAgIG92ZXJmbG93WTogJ3Njcm9sbCcsXHJcbiAgICB1c2VyU2VsZWN0OiAnbm9uZSdcclxuICB9LFxyXG4gIGVycm9yOiB7XHJcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxyXG4gICAgbGVmdDogJzUwJScsXHJcbiAgICB0b3A6ICc1MCUnLFxyXG4gICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKC01MCUsIC01MCUpJ1xyXG4gIH0sXHJcbiAgcHJvZ3Jlc3M6IHtcclxuICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxyXG4gICAgbGVmdDogJ2NhbGMoNTAlIC0gMjBweCknLFxyXG4gICAgdG9wOiAnY2FsYyg1MCUgLSAyMHB4KSdcclxuICB9LFxyXG4gIHRvZ2dsZToge1xyXG4gICAgcG9zaXRpb246ICdmaXhlZCcsXHJcbiAgICByaWdodDogJzEycHgnLFxyXG4gICAgdG9wOiAnMTJweCdcclxuICB9XHJcbn07XHJcbiJdfQ==
cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "com.synconset.imagepicker.ImagePicker",
        "file": "plugins/com.synconset.imagepicker/www/imagepicker.js",
        "pluginId": "com.synconset.imagepicker",
        "clobbers": [
            "plugins.imagePicker"
        ]
    },
    {
        "id": "cordova-plugin-advanced-http.lodash",
        "file": "plugins/cordova-plugin-advanced-http/www/lodash.js",
        "pluginId": "cordova-plugin-advanced-http"
    },
    {
        "id": "cordova-plugin-advanced-http.tough-cookie",
        "file": "plugins/cordova-plugin-advanced-http/www/umd-tough-cookie.js",
        "pluginId": "cordova-plugin-advanced-http"
    },
    {
        "id": "cordova-plugin-advanced-http.local-storage-store",
        "file": "plugins/cordova-plugin-advanced-http/www/local-storage-store.js",
        "pluginId": "cordova-plugin-advanced-http"
    },
    {
        "id": "cordova-plugin-advanced-http.cookie-handler",
        "file": "plugins/cordova-plugin-advanced-http/www/cookie-handler.js",
        "pluginId": "cordova-plugin-advanced-http"
    },
    {
        "id": "cordova-plugin-advanced-http.angular-integration",
        "file": "plugins/cordova-plugin-advanced-http/www/angular-integration.js",
        "pluginId": "cordova-plugin-advanced-http"
    },
    {
        "id": "cordova-plugin-advanced-http.http",
        "file": "plugins/cordova-plugin-advanced-http/www/advanced-http.js",
        "pluginId": "cordova-plugin-advanced-http",
        "clobbers": [
            "cordova.plugin.http"
        ]
    },
    {
        "id": "cordova-plugin-device.device",
        "file": "plugins/cordova-plugin-device/www/device.js",
        "pluginId": "cordova-plugin-device",
        "clobbers": [
            "device"
        ]
    },
    {
        "id": "cordova-plugin-facebook4.FacebookConnectPlugin",
        "file": "plugins/cordova-plugin-facebook4/www/facebook-native.js",
        "pluginId": "cordova-plugin-facebook4",
        "clobbers": [
            "facebookConnectPlugin"
        ]
    },
    {
        "id": "cordova-plugin-file-transfer.FileTransferError",
        "file": "plugins/cordova-plugin-file-transfer/www/FileTransferError.js",
        "pluginId": "cordova-plugin-file-transfer",
        "clobbers": [
            "window.FileTransferError"
        ]
    },
    {
        "id": "cordova-plugin-file-transfer.FileTransfer",
        "file": "plugins/cordova-plugin-file-transfer/www/FileTransfer.js",
        "pluginId": "cordova-plugin-file-transfer",
        "clobbers": [
            "window.FileTransfer"
        ]
    },
    {
        "id": "cordova-plugin-firebase.FirebasePlugin",
        "file": "plugins/cordova-plugin-firebase/www/firebase.js",
        "pluginId": "cordova-plugin-firebase",
        "clobbers": [
            "FirebasePlugin"
        ]
    },
    {
        "id": "com.hutchind.cordova.plugins.streamingmedia.StreamingMedia",
        "file": "plugins/com.hutchind.cordova.plugins.streamingmedia/www/StreamingMedia.js",
        "pluginId": "com.hutchind.cordova.plugins.streamingmedia",
        "clobbers": [
            "streamingMedia"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.synconset.imagepicker": "2.1.8",
    "cordova-plugin-add-swift-support": "1.7.0",
    "cordova-plugin-advanced-http": "1.9.1",
    "cordova-plugin-device": "1.1.4",
    "cordova-plugin-facebook4": "1.9.1",
    "cordova-plugin-file-transfer": "1.7.1",
    "cordova-plugin-firebase": "0.1.25",
    "com.hutchind.cordova.plugins.streamingmedia": "0.1.4"
};
// BOTTOM OF METADATA
});
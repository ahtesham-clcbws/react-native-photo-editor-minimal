"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _reactNative = require("react-native");
const {
  PhotoEditor
} = _reactNative.NativeModules;
var _default = exports.default = PhotoEditor;
//# sourceMappingURL=index.js.mapxportObject = {
  open: optionsEditor => {
    const options = {
      ...defaultOptions,
      ...optionsEditor
    };
    return new Promise(async (resolve, reject) => {
      try {
        const response = await PhotoEditor.open(options);
        if (response) {
          resolve(response);
          return true;
        }
        throw 'ERROR_UNKNOW';
      } catch (e) {
        reject(e);
      }
    });
  }
};
var _default = exports.default = exportObject;
//# sourceMappingURL=index.js.map
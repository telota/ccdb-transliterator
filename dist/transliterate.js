"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const OldSouthArabianCharacterMap_1 = require("./OldSouthArabianCharacterMap");
function oldSouthArabianToTransliteration(input) {
    let convertedString = input;
    OldSouthArabianCharacterMap_1.oldSouthArabianCharacterMap.forEach((char) => {
        const regex = new RegExp(char.original, 'g');
        convertedString = convertedString.replace(regex, char.transliteration);
    });
    return convertedString;
}
exports.oldSouthArabianToTransliteration = oldSouthArabianToTransliteration;
function transliterationToOldSouthArabian(input) {
    let convertedString = input;
    OldSouthArabianCharacterMap_1.oldSouthArabianCharacterMap.forEach((char) => {
        const regex = new RegExp(char.transliteration, 'g');
        convertedString = convertedString.replace(regex, char.original);
    });
    return convertedString;
}
exports.transliterationToOldSouthArabian = transliterationToOldSouthArabian;
exports.default = oldSouthArabianToTransliteration;
//# sourceMappingURL=transliterate.js.map
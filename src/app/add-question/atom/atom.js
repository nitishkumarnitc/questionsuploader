"use strict";
var Atom = (function () {
    function Atom(text, selectedType) {
        this.selectedType = selectedType;
        this.text = text;
    }
    return Atom;
}());
exports.Atom = Atom;

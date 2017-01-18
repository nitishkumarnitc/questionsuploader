"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var atom_1 = require("./atom");
var AtomComponent = (function () {
    function AtomComponent() {
        this.portionAdded = new core_1.EventEmitter();
        this.atomsArray = [];
        this.doneWithThisPortion = false;
        this.textTypes = [
            'isImage',
            'isEquation',
            'isSimpleText'
        ];
        this.hasBaseDropZoneOver = false;
        this.options = {
            url: 'http://www.mistu.org/etutor/uploadimages.php/'
        };
        this.sizeLimit = 2000000;
    }
    AtomComponent.prototype.onClickPlus = function () {
        if (this.selectedRadioButton == 'isImage') {
            console.log("Inside image");
            var atom = new atom_1.Atom(this.uploadFile['originalName'], this.selectedRadioButton);
            this.atomsArray.push(atom);
            this.selectedText = null;
            this.selectedRadioButton = null;
            this.printAtomClientsArray();
        }
        else {
            console.log("Inside image or euation");
            var atom = new atom_1.Atom(this.selectedText, this.selectedRadioButton);
            this.atomsArray.push(atom);
            this.selectedText = null;
            this.selectedRadioButton = null;
            this.printAtomClientsArray();
        }
    };
    AtomComponent.prototype.onClickOk = function () {
        this.onClickPlus();
        this.doneWithThisPortion = true;
        this.portionAdded.emit(this.atomsArray);
    };
    AtomComponent.prototype.printAtomClientsArray = function () {
        console.log("Inside print Array Atom . " + "Size is" + this.atomsArray.length);
        for (var _i = 0, _a = this.atomsArray; _i < _a.length; _i++) {
            var atom = _a[_i];
            console.log("Printing clients array" + "Text " + atom.text + "selectedType" + atom.selectedType);
        }
    };
    AtomComponent.prototype.ngOnInit = function () {
    };
    AtomComponent.prototype.handleUpload = function (data) {
        if (data && data.response) {
            data = JSON.parse(data.response);
            this.uploadFile = data;
        }
    };
    AtomComponent.prototype.fileOverBase = function (e) {
        this.hasBaseDropZoneOver = e;
    };
    AtomComponent.prototype.beforeUpload = function (uploadingFile) {
        if (uploadingFile.size > this.sizeLimit) {
            uploadingFile.setAbort();
            alert('File is too large');
        }
    };
    __decorate([
        core_1.Output()
    ], AtomComponent.prototype, "portionAdded", void 0);
    AtomComponent = __decorate([
        core_1.Component({
            selector: 'app-atom',
            templateUrl: './atom.component.html',
            styleUrls: ['./atom.component.css'],
        })
    ], AtomComponent);
    return AtomComponent;
}());
exports.AtomComponent = AtomComponent;

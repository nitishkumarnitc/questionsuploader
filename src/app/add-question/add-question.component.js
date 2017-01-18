"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var molecule_1 = require("./molecule");
var AddQuestionComponent = (function () {
    function AddQuestionComponent() {
        this.moleculeFormed = new core_1.EventEmitter();
    }
    AddQuestionComponent.prototype.ngOnInit = function () {
    };
    AddQuestionComponent.prototype.handlePortionAdded = function (input) {
        console.log("Inside Add-question");
        this.printPortionArray(input);
    };
    AddQuestionComponent.prototype.printPortionArray = function (input) {
        console.log("Inside print Array Atom . " + "Size is" + input.length);
        for (var _i = 0, input_1 = input; _i < input_1.length; _i++) {
            var atom = input_1[_i];
            console.log("Printing clients array" + "Text " + atom.text + "selectedType" + atom.selectedType);
        }
        var molecule = new molecule_1.Molecule(this.questionPortion, input);
        this.moleculeFormed.emit(molecule);
    };
    __decorate([
        core_1.Input()
    ], AddQuestionComponent.prototype, "questionPortion", void 0);
    __decorate([
        core_1.Output()
    ], AddQuestionComponent.prototype, "moleculeFormed", void 0);
    AddQuestionComponent = __decorate([
        core_1.Component({
            selector: 'app-add-question',
            templateUrl: './add-question.component.html',
            styleUrls: ['./add-question.component.css']
        })
    ], AddQuestionComponent);
    return AddQuestionComponent;
}());
exports.AddQuestionComponent = AddQuestionComponent;

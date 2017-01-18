"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var index_service_1 = require("./index.service");
var AppComponent = (function () {
    function AppComponent(_indexService) {
        this._indexService = _indexService;
        this.statement = "Statement";
        this.option1 = "Option1";
        this.option2 = "Option2";
        this.option3 = "Option3";
        this.option4 = "Option4";
        this.solution = "Solution";
        this.problem = [];
        this.title = 'Adding Question to Question Bank';
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._indexService.getChapters()
            .subscribe(function (chapters) { return _this.chapters = chapters; }, function (error) { return _this.errorMessage = error; });
    };
    AppComponent.prototype.onSelect = function (chapter) {
        this.selectedChapter = chapter;
    };
    AppComponent.prototype.handleMoleculeRecieved = function (molecule) {
        this.problem.push(molecule);
        this.printProblem(this.problem);
    };
    AppComponent.prototype.printProblem = function (problem) {
        console.log("Trying to Print Problem");
        for (var _i = 0, problem_1 = problem; _i < problem_1.length; _i++) {
            var molecule = problem_1[_i];
            console.log(molecule.portionType);
            for (var _a = 0, _b = molecule.portion; _a < _b.length; _a++) {
                var atom = _b[_a];
                console.log("Text:" + atom.text + "Selected Type :" + atom.selectedType);
            }
        }
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css'],
            providers: [index_service_1.IndexService]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;

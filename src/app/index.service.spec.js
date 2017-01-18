/* tslint:disable:no-unused-variable */
"use strict";
var testing_1 = require('@angular/core/testing');
var index_service_1 = require('./index.service');
describe('IndexService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [index_service_1.IndexService]
        });
    });
    it('should ...', testing_1.inject([index_service_1.IndexService], function (service) {
        expect(service).toBeTruthy();
    }));
});

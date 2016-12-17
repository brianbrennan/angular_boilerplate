"use strict";
var testing_1 = require('@angular/core/testing');
var platform_browser_1 = require('@angular/platform-browser');
var app_component_1 = require('./../../app/main/app.component');
describe('AppComponent', function () {
    var component;
    var fixture;
    var debugElement;
    var el;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [app_component_1.AppComponent] // declare the componenet
        });
        fixture = testing_1.TestBed.createComponent(app_component_1.AppComponent);
        component = fixture.componentInstance; //Test instance of App Component
        // query for the title <h1> by CSS element selector
        debugElement = fixture.debugElement.query(platform_browser_1.By.css('h1'));
        el = debugElement.nativeElement;
    });
    it('should display the app title', function () {
        expect(el.textContent).toContain('Angular Boilerplate');
    });
});
//# sourceMappingURL=app.component.test.js.map
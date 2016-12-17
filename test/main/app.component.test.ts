import {} from 'jasmine';

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AppComponent } from './../../app/main/app.component';

describe('AppComponent', () => {
    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;
    let debugElement: DebugElement;
    let el: HTMLElement;

    beforeEach(() => {
         TestBed.configureTestingModule({
             declarations: [ AppComponent ]// declare the componenet
         });

        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance; //Test instance of App Component

        // query for the title <h1> by CSS element selector
        debugElement = fixture.debugElement.query(By.css('h1'));
        el = debugElement.nativeElement;
    });

    it('should display the app title', () => {
        expect(el.textContent).toContain('Angular Boilerplate');
    });
});
import { TestBed } from '@angular/core/testing';
import { NgRedux, select } from '@angular-redux/store';
import { AppComponent } from './app.component';

describe('App', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ declarations: [AppComponent] });
  });

  it('should work', () => {
    let fixture = TestBed.createComponent(AppComponent);
    expect(fixture.componentInstance instanceof AppComponent).toBe(
      true,
      'should create AppComponent'
    );
  });
});

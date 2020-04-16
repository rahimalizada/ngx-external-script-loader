import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxExternalScriptLoaderComponent } from './ngx-external-script-loader.component';

describe('NgxExternalScriptLoaderComponent', () => {
  let component: NgxExternalScriptLoaderComponent;
  let fixture: ComponentFixture<NgxExternalScriptLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxExternalScriptLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxExternalScriptLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

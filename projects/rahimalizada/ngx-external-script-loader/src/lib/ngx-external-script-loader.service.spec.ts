import { TestBed } from '@angular/core/testing';

import { NgxExternalScriptLoaderService } from './ngx-external-script-loader.service';

describe('NgxExternalScriptLoaderService', () => {
  let service: NgxExternalScriptLoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxExternalScriptLoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

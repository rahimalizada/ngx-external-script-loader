import { ExternalScriptLoaderService } from './external-script-loader.service';

declare var moment;

describe('ExternalScriptLoaderService', () => {
  let service: ExternalScriptLoaderService;
  beforeEach(() => {
    service = new ExternalScriptLoaderService();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should load external script into a document', (done: DoneFn) => {
    expect(service).toBeTruthy();
    expect(document.getElementById('ext-momentjs')).toBeFalsy();

    const observable = service.load({
      name: 'momentjs',
      src:
        'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js',
    });
    expect(document.getElementById('ext-momentjs')).toBeFalsy();

    observable.subscribe((result) => {
      expect(result).toBeTruthy();
      expect(document.getElementById('ext-momentjs')).toBeTruthy();
      expect(moment).toBeTruthy();
      expect(moment('20111031', 'YYYYMMDD').format('dddd')).toBe('Monday');

      done();
    });
  });
});

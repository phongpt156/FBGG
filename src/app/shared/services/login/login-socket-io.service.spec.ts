import { TestBed, inject } from '@angular/core/testing';

import { LoginSocketIoService } from './login-socket-io.service';

describe('LoginSocketIoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginSocketIoService]
    });
  });

  it('should be created', inject([LoginSocketIoService], (service: LoginSocketIoService) => {
    expect(service).toBeTruthy();
  }));
});

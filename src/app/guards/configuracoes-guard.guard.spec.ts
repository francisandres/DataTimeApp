import { TestBed, async, inject } from '@angular/core/testing';

import { ConfiguracoesGuardGuard } from './configuracoes-guard.guard';

describe('ConfiguracoesGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConfiguracoesGuardGuard]
    });
  });

  it('should ...', inject([ConfiguracoesGuardGuard], (guard: ConfiguracoesGuardGuard) => {
    expect(guard).toBeTruthy();
  }));
});

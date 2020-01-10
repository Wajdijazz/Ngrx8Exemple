import { TestBed } from '@angular/core/testing';

import { ToDoEffectsService } from './to-do-effects.service';

describe('ToDoEffectsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ToDoEffectsService = TestBed.get(ToDoEffectsService);
    expect(service).toBeTruthy();
  });
});

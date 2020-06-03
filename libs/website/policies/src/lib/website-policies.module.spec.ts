import { async, TestBed } from '@angular/core/testing';
import { WebsitePoliciesModule } from './website-policies.module';

describe('WebsitePoliciesModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [WebsitePoliciesModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(WebsitePoliciesModule).toBeDefined();
  });
});

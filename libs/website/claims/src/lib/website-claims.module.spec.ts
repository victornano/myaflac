import { async, TestBed } from '@angular/core/testing';
import { WebsiteClaimsModule } from './website-claims.module';

describe('WebsiteClaimsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [WebsiteClaimsModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(WebsiteClaimsModule).toBeDefined();
  });
});

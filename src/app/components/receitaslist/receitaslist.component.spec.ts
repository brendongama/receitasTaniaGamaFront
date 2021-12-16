import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceitaslistComponent } from './receitaslist.component';

describe('ReceitaslistComponent', () => {
  let component: ReceitaslistComponent;
  let fixture: ComponentFixture<ReceitaslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceitaslistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceitaslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

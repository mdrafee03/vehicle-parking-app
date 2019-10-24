import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceDialogComponent } from './space-dialog.component';

describe('SpaceDialogComponent', () => {
  let component: SpaceDialogComponent;
  let fixture: ComponentFixture<SpaceDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpaceDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaceDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

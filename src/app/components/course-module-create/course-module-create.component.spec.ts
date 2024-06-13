import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseModuleCreateComponent } from './course-module-create.component';

describe('CourseModuleCreateComponent', () => {
  let component: CourseModuleCreateComponent;
  let fixture: ComponentFixture<CourseModuleCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CourseModuleCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseModuleCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

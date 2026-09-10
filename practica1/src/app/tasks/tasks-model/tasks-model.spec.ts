import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TasksModel } from './tasks-model';

describe('TasksModel', () => {
  let component: TasksModel;
  let fixture: ComponentFixture<TasksModel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TasksModel],
    }).compileComponents();

    fixture = TestBed.createComponent(TasksModel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

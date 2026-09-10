import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TasksCard } from './tasks-card';

describe('TasksCard', () => {
  let component: TasksCard;
  let fixture: ComponentFixture<TasksCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TasksCard],
    }).compileComponents();

    fixture = TestBed.createComponent(TasksCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

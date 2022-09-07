import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Task } from '../../project.model';
import { TaskFormPresenterService } from '../task-form-presenter/task-form-presenter.service';

@Component({
  selector: 'app-task-form-presentation',
  templateUrl: './task-form-presentation.component.html',
  viewProviders:[TaskFormPresenterService],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class TaskFormPresentationComponent implements OnInit {

  @Input() public set taskData(value:Task[] | null){
    if(value){
      this._taskData=value
      console.log(value); 
    }
  }

  public get taskData():Task[] | null{
    return this._taskData;
  }

  @Output() public add:EventEmitter<Task>;

  public taskForm:FormGroup;

  private _taskData:Task[];

  constructor(private taskFormPresenter:TaskFormPresenterService,private route:Router) {
    this.taskForm=this.taskFormPresenter.buildform();
    this.add=new EventEmitter();
   }

  ngOnInit(): void {
    this.taskFormPresenter.taskFormData$.subscribe((data)=>{
      this.add.emit(data);
    })
  }

  public onSubmit(){
    this.taskFormPresenter.onSubmit(this.taskForm)
  }

  public onCancel(){
    this.route.navigateByUrl('project-view/:id')
  }
}

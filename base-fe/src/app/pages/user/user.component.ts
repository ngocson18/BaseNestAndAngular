import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, pipe, takeUntil, tap } from 'rxjs';
import { UserModel } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit, OnDestroy {
  private _endSubjectObservable!: Subject<void>;
  public listUser: any[] = [];
  public userData!: UserModel;
  public fakeUser = '649bdad818f73d91d784eeca';
  constructor(
    private userService: UserService
  ) {
    this._endSubjectObservable = new Subject;
  }
  ngOnInit(): void {
    this.getUserById();
  }

  getUserById(): any {
    this.userService.getById(this.fakeUser)
      .pipe(
        takeUntil(this._endSubjectObservable),
        tap(res => {
          this.userData = res;
          // this.listUser = this.userData.listConversation;
          console.log(this.listUser);          
        })
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this._endSubjectObservable.next();
    this._endSubjectObservable.complete();
  }
}

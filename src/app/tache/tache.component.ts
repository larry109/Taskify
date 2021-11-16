import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SocialAuthService, SocialUser } from 'angularx-social-login';
import { Item } from '../item';
import {
  CdkDragDrop,  
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-tache',
  templateUrl: './tache.component.html',
  styleUrls: ['./tache.component.scss']
})
export class TacheComponent implements OnInit {
  todoForm: FormGroup;
  user: SocialUser;

  items: Item[] = [
    { description: 'Miatsena', done: true },
    { description: 'Miketrika Taskify', done: false },
    { description: 'Manasa lamba', done: false },
    { description: 'Mianatra TS', done: false },
  ];
  done: Item[] = [];
  constructor(private fb: FormBuilder, private socialAuthService: SocialAuthService) {}

  ngOnInit(): void {
    this.todoForm = this.fb.group({
      item: ['', Validators.required],
    });
  }

  addItem(description: string) {
    this.items.unshift({
      description,
      done: false,
    });
  }

  deleteItem(item: any) {
    this.items.splice(item, 1);
  }

  deleteDoneItem(item: any) {
    this.done.splice(item, 1);
  }

  drop(event: CdkDragDrop<Item[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
  logout(): void {
    this.socialAuthService.signOut(true);
  }

}

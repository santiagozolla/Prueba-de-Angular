import { Injectable } from '@angular/core';
import {HttpClient, HttpHandler} from '@angular/common/http'
import { Observable, of } from 'rxjs';
import {TASKS} from "../mock-tasks"
import {Tasks} from "../Task"


@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:5000/tasks';

  constructor(
    private http:HttpClient
  ) { }

  getTasks():Observable<Tasks[]> {
    return this.http.get<Tasks[]>(this.apiUrl);
  }
}

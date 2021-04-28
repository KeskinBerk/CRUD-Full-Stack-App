import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseURL = "http://localhost:8080/api/v1/employees";

  constructor(private httpClinet: HttpClient) { }

  getEmployeesList(): Observable<Employee[]> {
    return this.httpClinet.get<Employee[]>(`${this.baseURL}`);
  }

  createEmployee(employee: Employee): Observable<Object> {
    return this.httpClinet.post(`${this.baseURL}`, employee);
  }

  getEmployeeById(id: number): Observable<Employee> {
    return this.httpClinet.get<Employee>(`${this.baseURL}/${id}`)
  }

  updateEmployeeById(id: number, employee: Employee): Observable<Object> {
    return this.httpClinet.put(`${this.baseURL}/${id}`, employee);
  }

  deleteEmployee(id: number): Observable<Object> {
    return this.httpClinet.delete(`${this.baseURL}/${id}`);
  }

}

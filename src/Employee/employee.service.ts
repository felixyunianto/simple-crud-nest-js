import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Employee } from './employee.entity';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(Employee) private employeeRepo: Repository<Employee>,
  ) {}

  findAll(): Promise<Employee[]> {
    return this.employeeRepo.find();
  }

  create(newEmployee) {
    this.employeeRepo.insert(newEmployee);
  }

  update(id, employeeToUpdate) {
    this.employeeRepo.update(id, employeeToUpdate);
  }

  delete(id) {
    this.employeeRepo.delete(id);
  }
}

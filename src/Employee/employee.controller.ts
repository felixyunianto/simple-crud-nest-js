import {
  Controller,
  Get,
  Post,
  HttpCode,
  Body,
  Res,
  HttpStatus,
} from '@nestjs/common';
import { Employee } from './employee.entity';
import { EmployeeService } from './employee.service';
import { Response } from 'express';

@Controller('employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Get('all')
  async getAll(): Promise<Employee[]> {
    return await this.employeeService.findAll();
  }

  @Post('add')
  @HttpCode(201)
  createEmployee(@Body() newEmployee: any, @Res() res: Response) {
    this.employeeService.create(newEmployee);
    res.status(HttpStatus.CREATED).json({
      message: 'Create employee is successfully',
      data: newEmployee,
    });
  }
}

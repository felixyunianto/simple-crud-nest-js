import {
  Controller,
  Get,
  Post,
  HttpCode,
  Body,
  Res,
  HttpStatus,
  Param,
  Put,
  Delete,
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

  @Put('update/:id')
  @HttpCode(201)
  updateEmployee(
    @Param('id') id: string,
    @Body() bodyEmployee: any,
    @Res() res: Response,
  ) {
    this.employeeService.update(id, bodyEmployee);
    res.status(HttpStatus.CREATED).json({
      message: 'Update employee is successfully',
      data: bodyEmployee,
    });
  }

  @Delete('delete/:id')
  @HttpCode(201)
  deleteEmployee(@Param('id') id: string, @Res() res: Response) {
    this.employeeService.delete(id);
    res.status(HttpStatus.CREATED).json({
      message: 'Delete employee is successfully',
    });
  }
}

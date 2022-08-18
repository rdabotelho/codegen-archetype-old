import {Get, Post, Body, Param, UseBefore, Put, Delete, Controller, } from "routing-controllers";
import { DomainNameService } from '../service/DomainNameService';
import { DomainName } from '../entity/DomainName';
import { DomainNameMiddleware } from '../middleware/custom/DomainNameMiddleware';
import { Inject, Service } from "typedi";

@Service()
@Controller('/domainName')
export class DomainNameController {

  @Inject()
  domainNameService: DomainNameService;

  @Get('/')
  async getAllDomainName() {
    const result = await this.domainNameService.getAllDomainName();
    return {
      status: 'success',
      message: 'DomainNames fetched successfully',
      data: result
    };
  }

  @Get('/:id')
  async getDomainNameById(@Param('id') id: number) {
    const result = await this.domainNameService.getDomainNameById(id);
    return {
      status: 'success',
      message: 'DomainName fetched successfully',
      data: result
    };
  }

  @Post('/')
  @UseBefore(DomainNameMiddleware)
  async insertDomainName(@Body({ validate: true }) domainName: DomainName) {
    const result = await this.domainNameService.insertDomainName(domainName);
    return {
      status: 'success',
      message: 'DomainName created successfully',
      data: result
    };
  }

  @Put('/')
  @UseBefore(DomainNameMiddleware)
  async updateDomainName(@Body({ validate: true }) domainName: DomainName) {
    const result = await this.domainNameService.updateDomainName(domainName);
    return {
      status: 'success',
      message: 'DomainName updated successfully',
      data: result
    };
  }

  @Delete('/:id')
  async deleteDomainName(@Param('id') id: number) {
    await this.domainNameService.deleteDomainName(id);
    return {
      status: 'success',
      message: 'DomainName deleted successfully'
    };
  }

}
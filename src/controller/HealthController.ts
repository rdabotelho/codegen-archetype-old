import {Get, Controller, } from "routing-controllers";
import { Service } from "typedi";

@Service()
@Controller('/health')
export class HealthController {

  @Get('/')
  async health() {
    return {
      status: 'success',
      message: 'Health successfully'
    };
  }

}
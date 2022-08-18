import { ExpressMiddlewareInterface, Middleware } from "routing-controllers";
import { DomainName } from '../../entity/DomainName';
import { plainToClass } from 'class-transformer';
import { validateEntity } from "../../util/validator";
import { Service } from "typedi";

@Service()
@Middleware({ type: 'before' })
export class DomainNameMiddleware implements ExpressMiddlewareInterface {
  async use(request: any, response: any, next?: (err?: any) => any): Promise<any> {
    let domainName = plainToClass(DomainName, request.body);
    let validationErrors = await validateEntity(domainName);
    if (validationErrors.length > 0) {
      throw {
        thrown: true,
        message: 'Invalid data',
        errors: validationErrors
      }
    } else {
      next();
    }
  }
}

import { Service } from "typedi";
import { AppDataSource } from "../adapter/AppDataSource";
import { DomainName } from '../entity/DomainName';

@Service()
export class DomainNameRepository {

  async getAllDomainName(): Promise<DomainName[]> {
    return AppDataSource.getRepository(DomainName).find();
  }

  async getDomainNameById(id: number): Promise<DomainName|null> {
    return AppDataSource.getRepository(DomainName).findOneBy({id: id});
  }

  async insertDomainName(domainName: DomainName): Promise<DomainName> {
    return AppDataSource.getRepository(DomainName).save(domainName);
  }

  async updateDomainName(domainName: DomainName): Promise<DomainName> {
    return AppDataSource.getRepository(DomainName).save(domainName);
  }

  async deleteDomainName(id: number) {
    AppDataSource.getRepository(DomainName).delete(id);
  }

}

import { DomainNameRepository } from '../repository/DomainNameRepository';
import { DomainName } from '../entity/DomainName';
import { Service, Inject } from 'typedi';

@Service()
export class DomainNameService {

  @Inject()
  domainNameRepository: DomainNameRepository;
  
  async getAllDomainName(): Promise<DomainName[]> {
    return this.domainNameRepository.getAllDomainName();
  }

  async getDomainNameById(id: number): Promise<DomainName|null> {
    return this.domainNameRepository.getDomainNameById(id);
  }

  async insertDomainName(domainName: DomainName): Promise<DomainName> {
    return this.domainNameRepository.insertDomainName(domainName);
  }

  async updateDomainName(domainName: DomainName): Promise<DomainName> {
    return this.domainNameRepository.updateDomainName(domainName);
  }

  async deleteDomainName(id: number) {
    this.domainNameRepository.deleteDomainName(id);
  }

}

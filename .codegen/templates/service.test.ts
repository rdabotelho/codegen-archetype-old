import { DomainName } from '../../../src/entity/DomainName';
import { DomainNameRepository } from '../../../src/repository/DomainNameRepository';
import { DomainNameService } from '../../../src/service/DomainNameService';

const domainName = new DomainName();
const domainNameList: DomainName[] = [];
const useRepository = new DomainNameRepository(); 
const domainNameService = new DomainNameService();

jest.spyOn(useRepository, "getAllDomainName").mockReturnValue(Promise.resolve(domainNameList));
jest.spyOn(useRepository, "getDomainNameById").mockImplementation(id => Promise.resolve(id > 0 ? null : domainNameList[id]));
jest.spyOn(useRepository, "insertDomainName").mockImplementation(obj => Promise.resolve((!domainNameList.push(obj) || domainNameList[0]) as DomainName));
jest.spyOn(useRepository, "updateDomainName").mockImplementation(obj => Promise.resolve((!(domainNameList[0] = obj) || domainNameList[0]) as DomainName));
jest.spyOn(useRepository, "deleteDomainName").mockImplementation((id) => Promise.resolve(domainNameList.pop() as any));

domainNameService.domainNameRepository = useRepository;
  
describe("DomainNameService", () => {

    describe("getAllDomainName", () => {
        test("should return empty", async () => {
            domainNameList.length = 0;
            const result = await domainNameService.getAllDomainName();
            expect(result.length).toEqual(0);
        });
        test("should return not empty", async () => {
            domainNameList.length = 0;
            domainNameList.push(domainName);
            const result = await domainNameService.getAllDomainName();
            expect(result.length).toEqual(1);
            expect(result[0]).toEqual(domainName);
        });
    });

    describe("getDomainNameById", () => {
        test("should return null", async () => {
            domainNameList.length = 0;
            const result = await domainNameService.getDomainNameById(1);
            expect(result).toEqual(null);
        });
        test("should return not null", async () => {
            domainNameList.length = 0;
            domainNameList.push(domainName);
            const result = await domainNameService.getDomainNameById(0);
            expect(result).toEqual(domainName);
        });
    });

    describe("insertDomainName", () => {
        test("should insert a new domainName", async () => {
            domainNameList.length = 0;
            const result = await domainNameService.insertDomainName(domainName);
            expect(result).toEqual(domainName);
            expect(domainNameList.length).toEqual(1);
        });
    });

    describe("updateDomainName", () => {
        test("should update a(n) domainName", async () => {
            domainNameList.length = 0;
            domainNameList.push(new DomainName());
            const result = await domainNameService.updateDomainName(domainName);
            expect(result).toBe(domainName);
            expect(domainNameList[0]).toBe(domainName);
        });
    });

    describe("deleteDomainName", () => {
        test("should delete a(n) domainName", async () => {
            domainNameList.length = 0;
            domainNameList.push(new DomainName());
            await domainNameService.deleteDomainName(0);
            expect(domainNameList.length).toBe(0);
        });
    });

});

import { DomainName } from '../../../src/entity/DomainName';
import { DomainNameService } from '../../../src/service/DomainNameService';
import { DomainNameController } from "../../../src/controller/DomainNameController";

const domainName = new DomainName();
const domainNameList: DomainName[] = [];
const domainNameService = new DomainNameService();
const domainNameController = new DomainNameController();

jest.spyOn(domainNameService, "getAllDomainName").mockReturnValue(Promise.resolve(domainNameList));
jest.spyOn(domainNameService, "getDomainNameById").mockImplementation(id => Promise.resolve(id > 0 ? null : domainNameList[id]));
jest.spyOn(domainNameService, "insertDomainName").mockImplementation(obj => Promise.resolve((!domainNameList.push(obj) || domainNameList[0]) as DomainName));
jest.spyOn(domainNameService, "updateDomainName").mockImplementation(obj => Promise.resolve((!(domainNameList[0] = obj) || domainNameList[0]) as DomainName));
jest.spyOn(domainNameService, "deleteDomainName").mockImplementation((id) => Promise.resolve(domainNameList.pop() as any));

domainNameController.domainNameService = domainNameService;
  
describe("DomainNameController", () => {

    describe("getAllDomainName", () => {
        test("should return empty", async () => {
            domainNameList.length = 0;
            const result = await domainNameController.getAllDomainName();
            expect(result.status).toEqual("success");
            expect(result.data.length).toEqual(0);
        });
        test("should return not empty", async () => {
            domainNameList.length = 0;
            domainNameList.push(domainName);
            const result = await domainNameController.getAllDomainName();
            expect(result.status).toEqual("success");
            expect(result.data.length).toEqual(1);
            expect(result.data[0]).toEqual(domainName);
        });
    });

    describe("getDomainNameById", () => {
        test("should return null", async () => {
            domainNameList.length = 0;
            const result = await domainNameController.getDomainNameById(1);
            expect(result.status).toEqual("success");
            expect(result.data).toEqual(null);
        });
        test("should return not null", async () => {
            domainNameList.length = 0;
            domainNameList.push(domainName);
            const result = await domainNameController.getDomainNameById(0);
            expect(result.status).toEqual("success");
            expect(result.data).toEqual(domainName);
        });
    });

    describe("insertDomainName", () => {
        test("should insert a new domainName", async () => {
            domainNameList.length = 0;
            const result = await domainNameController.insertDomainName(domainName);
            expect(result.status).toEqual("success");
            expect(result.data).toEqual(domainName);
            expect(domainNameList.length).toEqual(1);
        });
    });

    describe("updateDomainName", () => {
        test("should update a(n) domainName", async () => {
            domainNameList.length = 0;
            domainNameList.push(new DomainName());
            const result = await domainNameController.updateDomainName(domainName);
            expect(result.status).toEqual("success");
            expect(result.data).toBe(domainName);
            expect(domainNameList[0]).toBe(domainName);
        });
    });

    describe("deleteDomainName", () => {
        test("should delete a(n) domainName", async () => {
            domainNameList.length = 0;
            domainNameList.push(new DomainName());
            const result = await domainNameController.deleteDomainName(0);
            expect(result.status).toEqual("success");
            expect(domainNameList.length).toBe(0);
        });
    });

});

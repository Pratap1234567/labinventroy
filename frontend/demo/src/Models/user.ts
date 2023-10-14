import { Address } from "./address";
import { EuipmentbookingRequest } from "./euipmentbooking";

export class User {
    public id!:number;
    public name!:string;
    public email!:string;
    public password!:string;
    public phone!:string;
    public address!:Address;
    public registeredEquipmentList !:EuipmentbookingRequest[];
}



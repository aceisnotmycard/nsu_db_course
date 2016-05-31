import {BaseItem} from "../base/base-item";
export class Facility implements BaseItem {
    id: number;
    address: string;
    clinic: boolean;
    parentId: number;
}

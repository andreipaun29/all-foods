import { Item } from "./item";

export type Order = {
    id: number,
    items: Item[],
    total: number,
    location: string,
    userId: number,
}
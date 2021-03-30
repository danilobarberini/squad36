import { Entity, EntityRepository, Repository } from "typeorm";
import { Item } from "../models/item";

@EntityRepository(Item)
class ItemsRepository extends Repository<Item> {

}

export { ItemsRepository };
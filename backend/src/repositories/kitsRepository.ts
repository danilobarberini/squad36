import { Entity, EntityRepository, Repository } from "typeorm";
import { Kit } from "../models/kit";

@EntityRepository(Kit)
class KitsRepository extends Repository<Kit> {

}

export { KitsRepository };

import { Entity, EntityRepository, Repository } from "typeorm";
import { Year } from "../models/year";

@EntityRepository(Year)
class YearRepository extends Repository<Year> {

}

export { YearRepository };
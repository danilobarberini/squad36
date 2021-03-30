import { Entity, EntityRepository, Repository } from "typeorm";
import { Year } from "../models/year";

@EntityRepository(Year)
class YearsRepository extends Repository<Year> {

}

export { YearsRepository };
import { Entity, EntityRepository, Repository } from "typeorm";
import { School } from "../models/school";

@EntityRepository(School)
class SchoolRepository extends Repository<School> {

}

export { SchoolRepository };
import { Entity, EntityRepository, Repository } from "typeorm";
import { School } from "../models/school";

@EntityRepository(School)
class SchoolsRepository extends Repository<School> {

}

export { SchoolsRepository };
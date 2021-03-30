import { Entity, EntityRepository, Repository } from "typeorm";
import { SchoolYear } from "../models/schoolYear";

@EntityRepository(SchoolYear)
class SchoolYearRepository extends Repository<SchoolYear> {

}

export { SchoolYearRepository };
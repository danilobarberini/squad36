import { Entity, EntityRepository, Repository } from "typeorm";
import { UserYear } from "../models/userYear";

@EntityRepository(UserYear)
class UserYearRepository extends Repository<UserYear> {

}

export { UserYearRepository };
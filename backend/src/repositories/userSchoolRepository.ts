import { Entity, EntityRepository, Repository } from "typeorm";
import { UserSchool } from "../models/userSchool";

@EntityRepository(UserSchool)
class UserSchoolRepository extends Repository<UserSchool> {

}

export { UserSchoolRepository };
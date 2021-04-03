import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { SchoolRepository } from "../repositories/schoolRepository";


class SchoolController {

    async create(request: Request, response: Response) {
        const { id, name, address } = request.body;

        const schoolRepository = getCustomRepository(SchoolRepository);

        const school = schoolRepository.create({
            id, name, address
        })

        await schoolRepository.save(school);

        return response.status(201).json(school);
    }

    async show(request: Request, response: Response) {
        const schoolRepository = getCustomRepository(SchoolRepository);

        const all = await schoolRepository.find();

        return response.json(all);
    }
}
export { SchoolController };
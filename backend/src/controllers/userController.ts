import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../repositories/usersRepository";
import * as yup from "yup";



class UserController {

    async create(request: Request, response: Response) {
        const { name, phone, registration, school_name, year_name, created_at } = request.body;

        const schema = yup.object().shape({
            name: yup.string().required(),
            phone: yup.string().required(),
            registration: yup.string().required()
        })

        const usersRepository = getCustomRepository(UsersRepository);

        const user = usersRepository.create({
            name, phone, registration, school_name, year_name, created_at
        })

        await usersRepository.save(user);

        return response.status(201).json(user);
    }

    async show(request: Request, response: Response) {
        const usersRepository = getCustomRepository(UsersRepository);

        const all = await usersRepository.find();

        return response.json(all);
    }
}
export { UserController };
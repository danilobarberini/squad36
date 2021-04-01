import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

import { v4 as uuid } from "uuid";
import { User } from "./user";




@Entity("schools")
class School {

    @PrimaryGeneratedColumn()
    readonly id: string;

    @Column()
    school_name: string;

    @Column({ nullable: false })
    address: string;

    @Column()
    year: string;

    @CreateDateColumn()
    created_at: Date;



    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}

export { School };
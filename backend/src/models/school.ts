import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { Year } from "./year";
import { v4 as uuid } from "uuid";


@Entity("schools")
class School {

    @PrimaryColumn()
    readonly id: string;

    @Column()
    name: string;

    @Column()
    address: string;

    @Column()
    year: number;

    @ManyToOne(() => Year)
    @JoinColumn({ name: "value" })
    value: Year;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}

export { School };
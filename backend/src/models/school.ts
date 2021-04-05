import { Column, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("schools")
class School {

    @PrimaryColumn()
    readonly id: string;

    @Column({ nullable: false })
    CNPJ: string;

    @Column()
    razao: string;

    @Column()
    fantasia: string;

    @Column()
    address: string;

    @Column()
    kit: string;

    @Column()
    qt: string;

    @Column()
    phone: string;

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}

export { School };
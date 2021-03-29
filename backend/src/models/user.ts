import { Column, CreateDateColumn, Entity, JoinColumn, PrimaryColumn, ManyToOne } from "typeorm";
import { School } from "./school";
import { Year } from "./year";
import { v4 as uuid } from "uuid";


@Entity("users")
class User {

    @PrimaryColumn()
    readonly id: string;

    @Column()
    name: string;

    @Column()
    phone: string;

    @Column()
    school_name: string;

    @ManyToOne(() => School)
    @JoinColumn({ name: "name" })
    school: School;

    @Column()
    year: number;

    @ManyToOne(() => Year)
    @JoinColumn({ name: "value" })
    value: Year;

    @Column()
    registration: string;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}

export { User };
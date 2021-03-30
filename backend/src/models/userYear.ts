import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { Year } from "./year";
import { User } from "./user";

@Entity("userYear")
class UserYear {
    @PrimaryColumn()
    readonly id: string;

    @Column()
    user_id: string;

    @ManyToOne(() => User)
    @JoinColumn({ name: "user_id" })
    user: User

    @Column()
    year: string;

    @ManyToOne(() => Year)
    @JoinColumn({ name: "value" })
    value: Year;
    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}

export { UserYear };
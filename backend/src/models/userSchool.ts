import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { School } from "./school";
import { User } from "./user";

@Entity("userSchool")
class UserSchool {
    @PrimaryColumn()
    readonly id: string;

    @Column()
    user_id: string;

    @ManyToOne(() => User)
    @JoinColumn({ name: "user_id" })
    user: User

    @Column()
    school_name: string;

    @ManyToOne(() => School)
    @JoinColumn({ name: "school_name" })
    school: School;

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}

export { UserSchool };
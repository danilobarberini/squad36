import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { School } from "./school";
import { Year } from "./year";

@Entity("schoolYear")
class SchoolYear {
    @PrimaryColumn()
    readonly id: string;

    @Column()
    school_name: string;

    @ManyToOne(() => School)
    @JoinColumn({ name: "school_name" })
    school: School;

    @Column()
    year: number;

    @ManyToOne(() => Year)
    @JoinColumn({ name: "value" })
    value: Year;

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}

export { SchoolYear };
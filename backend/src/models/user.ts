import { Column, CreateDateColumn, Entity, JoinColumn, PrimaryColumn, ManyToMany, ManyToOne, OneToMany, JoinTable } from "typeorm";
import { v4 as uuid } from "uuid";
import { School } from "./school";
import { Year } from "./year";



@Entity("users")
class User {

    @PrimaryColumn()
    readonly id: string;

    @Column({ nullable: false })
    name: string;

    @Column({ nullable: false })
    phone: string;

    @Column({ nullable: false })
    registration: string;

    @Column()
    school_name: string;

    @OneToMany(() => School, (school: School) => school.school_name)
    @JoinColumn({ referencedColumnName: "school_name" })
    school: School;

    @Column()
    year: string;

    @ManyToMany(() => Year, (year: Year) => year.name)
    @JoinColumn({ referencedColumnName: "name" })
    year_name: string;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}

export { User };
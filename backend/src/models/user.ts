import { Column, CreateDateColumn, Entity, JoinColumn, PrimaryColumn, ManyToMany, ManyToOne, OneToMany, JoinTable, EntityMetadata } from "typeorm";
import { v4 as uuid } from "uuid";


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

export { User };
import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity("years")
class Year {

    @PrimaryColumn()
    readonly id: string;

    @Column({ nullable: false })
    name: string;

    @Column()
    items: string;
}

export { Year };
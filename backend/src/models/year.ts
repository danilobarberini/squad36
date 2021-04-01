import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";



@Entity("years")
class Year {

    @PrimaryGeneratedColumn()
    readonly id: string;

    @Column({ nullable: false })
    name: string;

    @Column({ nullable: false })
    items: string;

}

export { Year };
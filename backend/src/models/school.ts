import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("schools")
class School {

    @PrimaryGeneratedColumn()
    readonly id: string;

    @Column({ nullable: false })
    name: string;

    @Column()
    address: string;
}

export { School };
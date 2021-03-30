import { Column, OneToOne, Entity, JoinColumn, PrimaryColumn } from "typeorm";
import { Kit } from "./kit";


@Entity("years")
class Year {

    @PrimaryColumn()
    value: number;

    @Column()
    name: string;

    @OneToOne(() => Kit)
    @JoinColumn({ name: "kit" })
    kit: Kit;
}

export { Year };
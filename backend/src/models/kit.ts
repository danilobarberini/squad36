import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToOne, PrimaryColumn } from "typeorm";
import { Item } from "./item";
import { v4 as uuid } from "uuid";
import { Year } from "./year";


@Entity("kits")
class Kit {

    @PrimaryColumn()
    readonly id: string;

    @Column()
    year: number;

    @OneToOne(() => Year)
    @JoinColumn({ name: "value" })
    value: Year;

    @Column()
    item: string;

    @ManyToMany(() => Item)
    @JoinColumn({ name: "list" })
    list: Item;

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}

export { Kit };
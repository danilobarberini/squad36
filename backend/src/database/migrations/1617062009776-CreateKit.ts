import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateKit1617053378954 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "kits",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "year",
                        type: "number"
                    },
                    {
                        name: "item_id",
                        type: "string"
                    }
                ],
                foreignKeys: [
                    {
                        name: "FKYear",
                        referencedTableName: "years",
                        referencedColumnNames: ["value"],
                        columnNames: ["year"],
                        onDelete: "CASCADE",
                        onUpdate: "CASCADE"
                    },
                    {
                        name: "FKItem",
                        referencedTableName: "items",
                        referencedColumnNames: ["id"],
                        columnNames: ["item_id"],
                        onDelete: "CASCADE",
                        onUpdate: "CASCADE"
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("surveys_users");
    }

}
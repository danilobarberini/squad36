import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateYear1617053373489 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "years",
                columns: [
                    {
                        name: "value",
                        type: "number",
                        isPrimary: true
                    },
                    {
                        name: "name",
                        type: "varchar"
                    },
                    {
                        name: "kit_id",
                        type: "varchar"
                    }
                ],
                foreignKeys: [
                    {
                        name: "FKKit",
                        referencedTableName: "kit",
                        referencedColumnNames: ["id"],
                        columnNames: ["kit_id"],
                        onDelete: "CASCADE",
                        onUpdate: "CASCADE"
                    }
                ]


            }
            )
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("years");
    }

}
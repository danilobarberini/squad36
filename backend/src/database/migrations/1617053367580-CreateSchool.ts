import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateSchool1617053367580 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "schools",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "name",
                        type: "varchar"
                    },
                    {
                        name: "address",
                        type: "varchar"
                    },
                    {
                        name: "year",
                        type: "number"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
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
                ]
            }
            )
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("schools");
    }

}
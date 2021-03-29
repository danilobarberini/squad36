import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUser1617053360916 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "users",
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
                        name: "phone",
                        type: "varchar"
                    },
                    {
                        name: "school_name",
                        type: "varchar"
                    },
                    {
                        name: "year",
                        type: "number"
                    },
                    {
                        name: "registration",
                        type: "varchar"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ],
                foreignKeys: [
                    {
                        name: "FKSchool",
                        referencedTableName: "schools",
                        referencedColumnNames: ["name"],
                        columnNames: ["school_name"],
                        onDelete: "CASCADE",
                        onUpdate: "CASCADE"
                    },
                    {
                        name: "FKYear",
                        referencedTableName: "years",
                        referencedColumnNames: ["value"],
                        columnNames: ["year"],
                        onDelete: "CASCADE",
                        onUpdate: "CASCADE"
                    }
                ]
            }
            )
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users");
    }

}
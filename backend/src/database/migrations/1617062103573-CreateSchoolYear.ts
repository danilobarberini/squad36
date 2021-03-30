import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUserSchool1617060820841 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "schoolYear",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "school_name",
                        type: "varchar"
                    },
                    {
                        name: "value",
                        type: "number"
                    }
                ],
                foreignKeys: [
                    {
                        name: "FKYear",
                        referencedTableName: "year",
                        referencedColumnNames: ["value"],
                        columnNames: ["value"],
                        onDelete: "CASCADE",
                        onUpdate: "CASCADE"
                    },
                    {
                        name: "FKSchool",
                        referencedTableName: "school",
                        referencedColumnNames: ["school_name"],
                        columnNames: ["school_name"],
                        onDelete: "CASCADE",
                        onUpdate: "CASCADE"
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("schoolYear");
    }

}
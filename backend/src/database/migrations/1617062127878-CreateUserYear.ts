import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUserYear1617060829171 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "userYear",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "user_id",
                        type: "varchar"
                    },
                    {
                        name: "value",
                        type: "number"
                    }
                ],
                foreignKeys: [
                    {
                        name: "FKUser",
                        referencedTableName: "users",
                        referencedColumnNames: ["id"],
                        columnNames: ["user_id"],
                        onDelete: "CASCADE",
                        onUpdate: "CASCADE"
                    },
                    {
                        name: "FKYear",
                        referencedTableName: "year",
                        referencedColumnNames: ["value"],
                        columnNames: ["value"],
                        onDelete: "CASCADE",
                        onUpdate: "CASCADE"
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("userYear");
    }

}
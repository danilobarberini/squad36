import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createSchool1617488659688 implements MigrationInterface {

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
                        name: "CNPJ",
                        type: "varchar"
                    },
                    {
                        name: "razao",
                        type: "varchar"
                    },
                    {
                        name: "fantasia",
                        type: "varchar"
                    },
                    {
                        name: "address",
                        type: "varchar"
                    },
                    {
                        name: "kit",
                        type: "varchar"
                    },
                    {
                        name: "qt",
                        type: "varchar"
                    },
                    {
                        name: "phone",
                        type: "varchar"
                    }
                ]
            }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("schools");
    }

}

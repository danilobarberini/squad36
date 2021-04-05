import { MigrationInterface, QueryRunner, Table, getConnection } from "typeorm";
import { v4 as uuid } from "uuid";

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

        await getConnection().createQueryBuilder().insert().into("schools").values([
            {
                id: uuid(), CNPJ: "Sem CNPJ", razao: "Escola Estadual Emygdio de Barros", fantasia: "E. E. Emygdio de Barros", address: "Av. Nossa Sra. da Assunção, 292 - Rio Pequeno, São Paulo - SP", kit: "Ensino Médio", qt: "1", phone: "(11)99990-9999"
            },
            {
                id: uuid(), CNPJ: "Sem CNPJ", razao: "Escola Estadual Roosevelt Presidente", fantasia: "E. E. Roosevelt Presidente", address: "Rua São Joaquim, 320 - Liberdade, São Paulo - SP", kit: "Ensino Fundamental II", qt: "3", phone: "(11)3208-6775"
            },
            {
                id: uuid(), CNPJ: "Sem CNPJ", razao: "Unidade Municipal de Educação Dos Andradas II", fantasia: "DOS ANDRADAS II", address: "Rua Ernesto de Mello Junior Almirante, 150 - Aparecida, Santos - SP", kit: "Ensino Fundamental I", qt: "2", phone: "(13)3227-4494"
            }
        ]).execute();
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("schools");
    }

}

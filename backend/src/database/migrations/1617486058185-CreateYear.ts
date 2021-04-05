import { getConnection, InsertQueryBuilder, MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateYear1617486058185 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "years",
                columns: [
                    {
                        name: "id",
                        type: "varchar",
                        isPrimary: true
                    },
                    {
                        name: "name",
                        type: "varchar"
                    },
                    {
                        name: "items",
                        type: "varchar"
                    }
                ]
            }))

        await getConnection().createQueryBuilder().insert().into("years").values([
            {
                id: "1", name: "Ensino Fundamental I", items: `Caderno Brochurão – 4 unidades (80 folhas cada), 
                Caderno de Desenho – 1 unidade (96 folhas cada), 
                Régua 30 cm – 1 unidade, Lápis de cor grande em resina termoplástica (12 cores) – 2 caixas, 
                Lápis grafite de resina termoplástica – 8 unidades, 
                Caneta esferográfica azul – 4 unidades, Apontador com depósito – 2 unidades, 
                Borracha branca – 3 unidades, 
                Tubo de cola branca (90 grs) – 2 unidades, 
                Giz de cera (12 cores grande) – 2 caixas`

            },
            {
                id: "2", name: "Ensino Fundamental II", items: `Caderno Universitário – 3 unidades (100 folhas cada), 
                Caderno de Desenho – 1 unidade (96 folhas cada), 
                Régua 30 cm – 1 unidade, 
                Lápis de cor grande em resina termoplástica (12 cores) – 1 caixa, 
                Lápis grafite de resina termoplástica – 8 unidades, 
                Caneta esferográfica azul – 6 unidades, 
                Caneta esferográfica vermelha – 3 unidades, 
                Apontador com depósito – 2 unidades, 
                Borracha branca – 3 unidades, 
                Tubo de cola branca (90 grs) – 1 unidade, 
                Tesoura sem ponta – 1 unidade
                `
            },
            {
                id: "3", name: "Ensino Médio", items: `Caderno Universitário – 3 unidades (200 folhas cada), 
                Caderno de Desenho – 1 unidade (96 folhas), 
                Régua 30 cm – 1 unidade, 
                Lápis de cor grande (12 cores) resina termoplástica – 1 caixa, 
                Lápis grafite de resina termoplástica – 8 unidades, 
                Caneta esferográfica azul – 3 unidades, 
                Caneta esferográfica preta – 2 unidades, 
                Caneta esferográfica vermelha – 2 unidades, 
                Apontador com depósito – 2 unidades, 
                Borracha branca – 2 unidades`
            }
        ]).execute()
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("year");
    }

}

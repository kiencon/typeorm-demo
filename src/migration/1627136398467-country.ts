import {MigrationInterface, QueryRunner} from "typeorm";

export class country1627136398467 implements MigrationInterface {
    name = 'country1627136398467'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `country` (`id` int NOT NULL AUTO_INCREMENT, `createdAt` timestamp NOT NULL, `updatedAt` timestamp NOT NULL, `name` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP TABLE `country`");
    }

}

import {MigrationInterface, QueryRunner} from "typeorm";

export class initDB1627135844027 implements MigrationInterface {
    name = 'initDB1627135844027'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `detergent` (`id` int NOT NULL AUTO_INCREMENT, `createdAt` timestamp NOT NULL, `updatedAt` timestamp NOT NULL, `name` varchar(255) NOT NULL, `number` int NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `detergent_formula` (`id` int NOT NULL AUTO_INCREMENT, `createdAt` timestamp NOT NULL, `updatedAt` timestamp NOT NULL, `name` varchar(255) NOT NULL, `ratio` int NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP TABLE `detergent_formula`");
        await queryRunner.query("DROP TABLE `detergent`");
    }

}

import {MigrationInterface, QueryRunner} from "typeorm";

export class addPhoto1627136119720 implements MigrationInterface {
    name = 'addPhoto1627136119720'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `photo` (`id` int NOT NULL AUTO_INCREMENT, `createdAt` timestamp NOT NULL, `updatedAt` timestamp NOT NULL, `url` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP TABLE `photo`");
    }

}

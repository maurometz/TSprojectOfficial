/* eslint-disable no-new */
/* eslint-disable class-methods-use-this */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/prefer-default-export */
/* eslint-disable prettier/prettier */

import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AddFineAmountColumn1666035962273 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            "cars",
            new TableColumn({
                name: "fine_amount",
                type: "varchar",
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("cars", "fine_amount");

    }

}

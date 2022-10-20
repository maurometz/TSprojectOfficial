/* eslint-disable no-new */
/* eslint-disable class-methods-use-this */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/prefer-default-export */
/* eslint-disable prettier/prettier */

import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateCars1666015789619 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
        new Table({
            name: "cars",
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
                    name: "description",
                    type: "varchar"
                },
                {
                    name: "daily_rate",
                    type: "numeric"
                },
                {
                    name: "available",
                    type: "boolean",
                    default: true
                },
                {
                    name: "license_plate",
                    type: "varchar"
                },
                {
                    name: "brand",
                    type: "varchar"
                },
                {
                    name: "category_id",
                    type: "uuid",
                    isNullable: true
                },
                {
                    name: "created_at",
                    type: "timestamp",
                    default: "now()"
                }
            ],
            foreignKeys: [
                {
                    name: "FKCategoryCar",
                    referencedTableName: "categories",
                    referencedColumnNames: ["id"],
                    columnNames: ["category_id"],
                    onDelete: "SET NULL",
                    onUpdate: "SET NULL"
                }
            ]
        })
    )}

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("cars");
    }

}

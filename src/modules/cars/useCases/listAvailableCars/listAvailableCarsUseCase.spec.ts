/* eslint-disable @typescript-eslint/no-empty-function */
import { CarsRepositoryInMemory } from "../../Repositories/in-memory/CarsRepositoryInMemory";
import { ListAvailableCarsUseCase } from "./listAvailableCarsUseCase";

/* eslint-disable @typescript-eslint/no-unused-vars */
let listCarsUseCase: ListAvailableCarsUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("List Cars", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    listCarsUseCase = new ListAvailableCarsUseCase(carsRepositoryInMemory);
  });

  it("should be able to list all available cars", async () => {
    const car = carsRepositoryInMemory.create({
      name: "Car 1",
      description: "car description",
      daily_rate: 110,
      license_plate: "gdv-1423",
      fine_amount: 100,
      brand: "brand",
      category_id: "category_id",
    });

    // const cars = await listCarsUseCase.execute({});
    // expect(cars).toEqual([car]);
  });

  it("should be able to list all available cars by brand", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car2",
      description: "Carro description",
      daily_rate: 110,
      license_plate: "DEF-1234",
      fine_amount: 100,
      brand: "Car_brand_test",
      category_id: "category_id",
    });

    const cars = await listCarsUseCase.execute({
      brand: "Car_brand_test",
    });
    expect(cars).toEqual([car]);
  });

  it("Should be able to list all avaliable cars by name", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car3",
      description: "Sedan Completo",
      daily_rate: 800.0,
      license_plate: "ISD9R36",
      fine_amount: 200.0,
      brand: "Chevrolet",
      category_id: "category_id",
    });
    const cars = await listCarsUseCase.execute({
      name: "Car3",
    });
    expect(cars).toEqual([car]);
  });

  it("Should be able to list all avaliable cars by category", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car3",
      description: "Sedan Completo",
      daily_rate: 800.0,
      license_plate: "ISD9R36",
      fine_amount: 200.0,
      brand: "Chevrolet",
      category_id: "12345",
    });
    const cars = await listCarsUseCase.execute({
      category_id: "12345",
    });
    expect(cars).toEqual([car]);
  });
});

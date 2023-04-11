import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";

import { ListAvailableCarsUseCase } from "./ListAvailableCarsUseCase";

let listAvailableCarsUseCase: ListAvailableCarsUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("List Cars", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    listAvailableCarsUseCase = new ListAvailableCarsUseCase(
      carsRepositoryInMemory
    );
  });

  it("should be able to list all available cars", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Test Car",
      description: "example description",
      daily_rate: 180,
      license_plate: "DEF-5566",
      fine_amount: 90,
      brand: "Audi",
      category_id: "category_id",
    });

    const cars = await listAvailableCarsUseCase.execute({});

    expect(cars).toEqual([car]);
  });

  it("should be able to list all available cars by brand", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Test Car 2",
      description: "test description",
      daily_rate: 140,
      license_plate: "DEF-1234",
      fine_amount: 290,
      brand: "GM",
      category_id: "example_id",
    });

    const cars = await listAvailableCarsUseCase.execute({ brand: "GM" });

    expect(cars).toEqual([car]);
  });

  it("should be able to list all available cars by name", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Test Car 3",
      description: "test description",
      daily_rate: 140,
      license_plate: "DEF-1234",
      fine_amount: 260,
      brand: "Volkswagen",
      category_id: "example_id",
    });

    const cars = await listAvailableCarsUseCase.execute({ name: "Test Car 3" });

    expect(cars).toEqual([car]);
  });

  it("should be able to list all available cars by category id", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Test Car 4",
      description: "Car for tests",
      daily_rate: 190,
      license_plate: "NOD-1235",
      fine_amount: 80,
      brand: "Tesla",
      category_id: "example_id",
    });

    const cars = await listAvailableCarsUseCase.execute({
      category_id: "example_id",
    });

    expect(cars).toEqual([car]);
  });
});

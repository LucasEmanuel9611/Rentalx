import { RentalsRepositoryInMemory } from "@modules/rentals/repositories/in-memory/RentalsRepositoryInMemory";
import dayjs from "@shared/container/providers/DateProvider/dayjs.config";
import { DayjsDateProvider } from "@shared/container/providers/DateProvider/implementations";
import { AppError } from "@shared/errors/AppError";
import { CreateRentalUseCase } from "./CreateRentalUseCase";
import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";

let createRentalUseCase: CreateRentalUseCase;
let rentalsRepositoryInMemory: RentalsRepositoryInMemory;
let carsRepositoryInMemory: CarsRepositoryInMemory;
let dayjsDateProvider: DayjsDateProvider;

describe("Create Rental", () => {
  const dayAdd24Hours = dayjs().add(1, "day").toDate();

  beforeEach(() => {
    rentalsRepositoryInMemory = new RentalsRepositoryInMemory();
    dayjsDateProvider = new DayjsDateProvider();
    createRentalUseCase = new CreateRentalUseCase(
      rentalsRepositoryInMemory,
      dayjsDateProvider,
      carsRepositoryInMemory
    );
  });

  it("should be able to create a new rental", async () => {
    const rental = await createRentalUseCase.execute({
      user_id: "133322",
      car_id: "333444",
      expected_return_date: dayAdd24Hours,
    });

    expect(rental).toHaveProperty("id");
    expect(rental).toHaveProperty("start_date");
  });

  it("should not be able to create a new rental if exists there another open rental to the same user", async () => {
    expect(async () => {
      await createRentalUseCase.execute({
        user_id: "333455",
        car_id: "22211133",
        expected_return_date: dayAdd24Hours,
      });

      await createRentalUseCase.execute({
        user_id: "333455",
        car_id: "0999199",
        expected_return_date: dayAdd24Hours,
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it("should not be able to create a new rental if exists there another open rental to the same car", async () => {
    expect(async () => {
      await createRentalUseCase.execute({
        user_id: "133",
        car_id: "22211133",
        expected_return_date: dayAdd24Hours,
      });

      await createRentalUseCase.execute({
        user_id: "331",
        car_id: "22211133",
        expected_return_date: dayAdd24Hours,
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it("should not be able to create a new rental if exists there another open rental to the same car", async () => {
    expect(async () => {
      await createRentalUseCase.execute({
        user_id: "133",
        car_id: "22211133",
        expected_return_date: dayAdd24Hours,
      });

      await createRentalUseCase.execute({
        user_id: "331",
        car_id: "22211133",
        expected_return_date: dayjs().toDate(),
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it("should not be able to create a new rental if the expected_return_date i less than 24 hours", async () => {
    expect(
      async () =>
        await createRentalUseCase.execute({
          user_id: "133",
          car_id: "22211133",
          expected_return_date: dayjs().toDate(),
        })
    ).rejects.toBeInstanceOf(AppError);
  });
});

import { container } from "tsyringe";
import { DayjsDateProvider } from "./implementations";
import { IDateProvider } from "./implementations/IDateProviders";

container.registerSingleton<IDateProvider>(
  "DayjsDateProvider",
  DayjsDateProvider
);

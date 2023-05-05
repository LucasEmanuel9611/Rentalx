import { container } from "tsyringe";
import { DayjsDateProvider } from "./implementations";
import { IDateProvider } from "./implementations/IDateProvider";

container.registerSingleton<IDateProvider>(
  "DayjsDateProvider",
  DayjsDateProvider
);

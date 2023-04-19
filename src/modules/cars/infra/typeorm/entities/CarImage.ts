import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";

@Entity("cars_image")
export class CarImage {
  @PrimaryColumn()
  car_id: string;

  @Column()
  specification_id: string;

  @CreateDateColumn()
  created_at: Date;
}

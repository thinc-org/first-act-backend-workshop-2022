import { GenEdType } from "../common/types/genend";
export class CourseModel {
  courseNo!: string;
  abbrName!: string;
  courseNameTh!: string;
  courseNameEn!: string;
  department!: string;
  credit!: number;
  creditHours!: string;
  genEdType!: GenEdType;
  createdAt!: Date;
  updatedAt!: Date;

  constructor(model: CourseModel) {
    Object.assign(this, model);
  }
}

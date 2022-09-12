import { GenEdType } from "../common/types/genend";
import { CourseModel } from "../models/course";
import { RequestDto, RespsonseDto } from "./common";

export class CourseDto {
  courseNo!: string;
  abbrName!: string;
  courseNameTh!: string;
  courseNameEn!: string;
  department!: string;
  credit!: number;
  creditHours!: string;
  genEdType!: string;

  constructor(partial: Partial<CourseDto>) {
    Object.assign(this, partial);
  }

  static fromModel(course: CourseModel) {
    return new CourseDto({
      courseNo: course.courseNo,
      abbrName: course.abbrName,
      courseNameTh: course.courseNameTh,
      courseNameEn: course.courseNameEn,
      department: course.department,
      credit: course.credit,
      creditHours: course.creditHours,
      genEdType: course.genEdType,
    });
  }

  static fromModels(courses: CourseModel[]) {
    return courses.map((c) => CourseDto.fromModel(c));
  }
}

export class CoursesDto extends RespsonseDto {
  totalCourse: number;
  courses: CourseDto[];

  constructor(totalCourse: number, courses: CourseDto[]) {
    super();
    this.totalCourse = totalCourse;
    this.courses = courses;
  }
}

export class CreateCourseDto extends RequestDto {
  abbrName!: string;
  courseNameTh!: string;
  courseNameEn!: string;
  department!: string;
  credit!: number;
  creditHours!: string;
  genEdType!: GenEdType;

  constructor(partial: Partial<CreateCourseDto>) {
    super();
    Object.assign(this, partial);
  }
}
export class UpdateCourseDto extends RequestDto {
  abbrName?: string;
  courseNameTh?: string;
  courseNameEn?: string;
  department?: string;
  credit?: number;
  creditHours?: string;
  genEdType?: GenEdType;

  constructor(partial: Partial<CreateCourseDto>) {
    super();
    Object.assign(this, partial);
  }
}

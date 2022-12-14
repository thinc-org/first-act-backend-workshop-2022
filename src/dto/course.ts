import { GenEdType } from "../common/types/genend";
import { CourseModel } from "../models/course";

export class CourseDto {
  courseNo!: string;
  abbrName!: string;
  courseNameTh!: string;
  courseNameEn!: string;
  department!: string;
  credit!: number;
  creditHours!: string;
  genEdType!: string;

  constructor(model: CourseDto) {
    Object.assign(this, model);
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

export class CoursesDto {
  totalCourse: number;
  courses: CourseDto[];

  constructor(totalCourse: number, courses: CourseDto[]) {
    this.totalCourse = totalCourse;
    this.courses = courses;
  }
}

export class CreateCourseDto {
  abbrName!: string;
  courseNameTh!: string;
  courseNameEn!: string;
  department!: string;
  credit!: number;
  creditHours!: string;
  genEdType!: GenEdType;

  constructor(model: CreateCourseDto) {
    Object.assign(this, model);
  }
}
export class UpdateCourseDto {
  abbrName?: string;
  courseNameTh?: string;
  courseNameEn?: string;
  department?: string;
  credit?: number;
  creditHours?: string;
  genEdType?: GenEdType;

  constructor(model: CreateCourseDto) {
    Object.assign(this, model);
  }
}

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

  constructor(partial: Partial<CreateCourseDto>) {
    Object.assign(this, partial);
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

  constructor(partial: Partial<CreateCourseDto>) {
    Object.assign(this, partial);
  }
}

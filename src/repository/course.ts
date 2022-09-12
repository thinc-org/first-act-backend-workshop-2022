import { courses } from "../common/mocks/course";
import { CreateCourseDto } from "../dto/course";
import { CourseModel } from "../models/course";

/**
 * return all courses from the database
 * @returns {CourseModel[]}
 */
const findCourses = () => courses.map((c) => new CourseModel(c));

/**
 * return a course by courseNo from the database
 * @param courseNo a courseNo
 */
const findCourseByCourseNo = (courseNo: string) =>
  courses.find((c) => c.courseNo === courseNo);

const createCourse = (course: CreateCourseDto) => {
  const courseNo = Math.floor(Math.random() * 100000).toString();
  const updatedAt = new Date();
  const createdAt = new Date();
  const newCourse = new CourseModel({
    courseNo,
    updatedAt,
    createdAt,
    ...course,
  });
  courses.push(newCourse);
  return { ...newCourse } as CourseModel;
};

/**
 * update a course by courseNo from the database
 * @param courseNo a courseNo
 * @param courseDto a value to update
 */
const updateCourse = (courseNo: string, courseDto: CreateCourseDto) => {
  const course = courses.find((c) => c.courseNo === courseNo);
  if (!course) {
    return undefined;
  }
  course.abbrName = courseDto.abbrName || course.abbrName;
  course.courseNameTh = courseDto.courseNameTh || course.courseNameTh;
  course.courseNameEn = courseDto.courseNameEn || course.courseNameEn;
  course.department = courseDto.department || course.department;
  course.credit = courseDto.credit || course.credit;
  course.creditHours = courseDto.creditHours || course.creditHours;
  course.genEdType = courseDto.genEdType || course.genEdType;
  return { ...course } as CourseModel;
};

/**
 * delete a course by courseNo in the database
 * @param courseNo a courseNo
 */
const deleteCourseByCourseNo = (courseNo: string) => {
  const course = courses.find((c) => c.courseNo === courseNo);
  if (!course) {
    return undefined;
  }
  const index = courses.indexOf(course);
  courses.splice(index, 1);
  return { ...course } as CourseModel;
};

const courseRepo = {
  findCourses,
  findCourseByCourseNo,
  createCourse,
  updateCourse,
  deleteCourseByCourseNo,
};

export default courseRepo;

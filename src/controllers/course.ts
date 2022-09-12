import { Request, Response } from "express";
import { courses } from "../common/mocks/course";
import { ErrorResponseDto } from "../dto/common";
import { CourseDto, CreateCourseDto, CoursesDto } from "../dto/course";
import courseRepo from "../repository/course";

export const getCourses = (req: Request, res: Response) => {
  const coursesDto = CourseDto.fromModels(courseRepo.findCourses());
  const getCoursesDto = new CoursesDto(courses.length, coursesDto);
  res.status(200).json(getCoursesDto);
};

export const getCourse = (req: Request, res: Response) => {
  const id = req.params.id;
  const course = courseRepo.findCourseByCourseNo(id);
  if (!course) {
    const error = new ErrorResponseDto("Course not found", 404);
    res.status(404).json(error);
    return;
  }
  const courseDto = CourseDto.fromModel(course);
  res.status(200).json(courseDto);
};

export const postCourse = (req: Request, res: Response) => {
  const course = new CreateCourseDto(req.body);
  const newCourse = courseRepo.createCourse(course);
  const newCourseDto = CourseDto.fromModel(newCourse);
  res.status(200).json(newCourseDto);
};

export const patchCourse = (req: Request, res: Response) => {
  const id = req.params.id;
  const course = courseRepo.updateCourse(id, req.body);
  if (!course) {
    const error = new ErrorResponseDto("Course not found", 404);
    res.status(404).json(error);
    return;
  }
  const courseDto = CourseDto.fromModel(course);
  res.status(200).json(courseDto);
};

export const deleteCourse = (req: Request, res: Response) => {
  const id = req.params.id;
  const course = courseRepo.deleteCourseByCourseNo(id);
  if (!course) {
    const error = new ErrorResponseDto("Course not found", 404);
    res.status(404).json(error);
    return;
  }
  const courseDto = CourseDto.fromModel(course);
  res.status(200).json(courseDto);
};

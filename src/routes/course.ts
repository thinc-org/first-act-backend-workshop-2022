import { Router } from "express";
import {
  getCourses,
  getCourse,
  postCourse,
  patchCourse,
  deleteCourse,
} from "../controllers/course";

const router = Router();
router.get("/course", getCourses);
router.get("/course/:id", getCourse);
router.post("/course", postCourse);
router.patch("/course/:id", patchCourse);
router.delete("/course/:id", deleteCourse);

export default router;

import { Router } from "express";
import courseController from "../controllers/course";

const router = Router();
router.get("/course", courseController.getCourses);
router.get("/course/:id", courseController.getCourse);
router.post("/course", courseController.postCourse);
router.patch("/course/:id", courseController.patchCourse);
router.delete("/course/:id", courseController.deleteCourse);

export default router;

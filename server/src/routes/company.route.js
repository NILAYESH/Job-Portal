import { Router } from "express";
import {
    registerCompany,
    loginCompany,
    logoutCompany,
    currentCompany,
    updateCompanyDetails,
    uploadCompanyLogo,
    deleteCompanyLogo
} from "../controllers/company.controller.js";
import { verifyAdmin } from "../middlewares/admin.middleware.js";
import { upload } from "../middlewares/multer.middleware.js";

const router = Router();

router.route("/register").post(registerCompany);
router.route("/login").post(loginCompany);
router.route("/logout").post(verifyAdmin, logoutCompany);
router.route("/current").get(verifyAdmin, currentCompany);
router.route("/update-details").put(verifyAdmin, updateCompanyDetails);
router.route("/upload-logo").post(verifyAdmin, upload.single("logo"), uploadCompanyLogo);
router.route("/delete-logo").delete(verifyAdmin, deleteCompanyLogo);

export default router;
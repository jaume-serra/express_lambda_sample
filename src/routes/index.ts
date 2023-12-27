import { Router } from "express";

import routes from "./test.route";

const router = Router();

router.use("/routes", routes);

export default router;

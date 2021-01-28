"use strict";

import log from "../config/log.config.js";
import { Router } from "express";
import C3D3Service from "../services"

const router = Router();

log.debug("routes/index.js");
router.get('/it', C3D3Service.getIt);

router.get('/logo', C3D3Service.getLogo);

router.get('/forJupyter', C3D3Service.forJupyter);

//router.post('/', C3D3Service.renderC3);

export default {
    router: router
};

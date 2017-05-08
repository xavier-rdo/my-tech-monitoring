import express from 'express';
const router = express.Router();

import TechResourcesRepository from '../model/TechResourcesRepository';
const techResourcesRepository = new TechResourcesRepository();

/**
 * Get all technical resources
 */
router.get('/', (req, res) => {
    techResourcesRepository.getAllResources()
        .then(function(data) {
            res.status(200)
               .json({
                    data: data,
                    pagination: {}
                });
        })
        .catch(function (err) {
            res.status(500)
               .json({
                    errorCode: 1020,
                    errorMessage: 'Database request has failed : ' + err
                });
        });
    ;
});

export default router;

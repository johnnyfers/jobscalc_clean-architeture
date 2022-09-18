import { Router } from 'express';
import { CreateJobController } from 'src/app/controllers/CreateJobController';
import { DashboardController } from 'src/app/controllers/DashboardController';
import { DeleteJobController } from 'src/app/controllers/DeleteJobController';
import { ProfileIndexController } from 'src/app/controllers/ProfileIndexController';
import { SaveJobController } from 'src/app/controllers/SaveJobController';
import { ShowJobController } from 'src/app/controllers/ShowJobController';
import { UpdateJobController } from 'src/app/controllers/UpdateJobController';
import { UpdateProfileController } from 'src/app/controllers/UpdateProfilecontroller';

export const routes = Router();

const dashobardIndexController = new DashboardController()
const createJobController = new CreateJobController()
const saveJobController = new SaveJobController()
const showJobController = new ShowJobController()
const updateJobController = new UpdateJobController()
const deleteJobController = new DeleteJobController()
const profileIndexController = new ProfileIndexController()
const updateProfileController = new UpdateProfileController()

routes.get('/', dashobardIndexController.index)
routes.get('/job', createJobController.create)
routes.post('/job', saveJobController.save)
routes.get('/job/:id', showJobController.show)
routes.post('/job/:id', updateJobController.update)
routes.post('/job/delete/:id', deleteJobController.delete)
routes.get('/profile', profileIndexController.index)
routes.post('/profile', updateProfileController.update)

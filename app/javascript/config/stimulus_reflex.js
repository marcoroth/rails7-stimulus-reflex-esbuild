import { application } from "../controllers/application"

import StimulusReflex from 'stimulus_reflex'
import controller from '../controllers/application_controller'

StimulusReflex.initialize(application, { controller, isolate: true })

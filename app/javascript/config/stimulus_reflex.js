import { application } from "../controllers/application"

import StimulusReflex from 'stimulus_reflex'
import CableReady from 'cable_ready'

import consumer from '../channels/consumer'
import controller from '../controllers/application_controller'

application.consumer = consumer

StimulusReflex.initialize(application, { controller, isolate: true })
CableReady.initialize({ consumer })

import { application } from "./application"

import controllers from "./**/*_controller.js";
import viewControllers from "../../components/**/*_controller.js"


/**
* ESBuilds AST doesnt seem to like the registration process outside of a function.
* Most likely because the controllers also get imported in app/javascript/app.js
 */
function registerControllers () {
  [...controllers, ...viewControllers].forEach((controller) => {
    // ESBuild autonames for us, but it looks like: "...--components--example--component"
    controller.name = controller.name.replace("...--components--", "")
    application.register(controller.name, controller.module.default)
  })
}

registerControllers()

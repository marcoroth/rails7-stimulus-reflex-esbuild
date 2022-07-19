import "@hotwired/turbo-rails"
import "./channels"
import "./controllers/index"
import "./config/stimulus_reflex"

import viewComponents from "../components/**/*.{js,css,scss}"

if (viewComponents != null) {
  // Silly hack to avoid treeshaking.
}

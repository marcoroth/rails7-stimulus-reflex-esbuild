import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect () {
    window.alert("Your example view component controller has successfully connected")
  }
}

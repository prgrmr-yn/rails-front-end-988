import { Controller } from "@hotwired/stimulus"
import Typed from "typed.js";

export default class extends Controller {
  connect() {
    new Typed(this.element,{
      strings: ['change your life', 'learn to code'],
      typeSpeed: 50,
      loop: true
    })
  }
}

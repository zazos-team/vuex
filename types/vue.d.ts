/**
 * Extends interfaces in Vue.js
 */

import { ComponentCustomOptions } from "vue";
import { Store } from "./index";

declare module "vue" {
  interface ComponentCustomOptions {
    store?: Store<any>;
  }
}

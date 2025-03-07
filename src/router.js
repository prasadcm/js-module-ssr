import About from "./about.js";
import Contact from "./contact.js";
import Home from "./home.js";

export default function Router() {
  const location = window.location.pathname;
  var detail = null;
  if (location.endsWith("/about")) {
    detail = About();
  } else if (location.endsWith("/contact")) {
    detail = Contact();
  } else {
    detail = Home();
  }
  return detail;
}

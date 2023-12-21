switch (!0) {
  case /contact/.test(window.location.pathname):
    document.getElementById("contact").classList.add("active");
    break;
  case /info/.test(window.location.pathname):
    document.getElementById("info").classList.add("active");
    break;
  case /links/.test(window.location.pathname):
    document.getElementById("links").classList.add("active");
    break;
  case /search/.test(window.location.pathname):
    document.getElementById("search").classList.add("active");
    break;
  case /services/.test(window.location.pathname):
    document.getElementById("services").classList.add("active");
    break;
  default:
    document.getElementById("home").classList.add("active");
}

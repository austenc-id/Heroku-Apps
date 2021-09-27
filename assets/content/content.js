import { col, hidden, sbcol, thumb } from "../style/style.js";
import { header } from "./header/header.js";
import { Templates } from "./main/templates.js";
import { navigation } from "./navigation/navigation.js";

const template = new Templates

function leftsidebar () {
  document.getElementById( 'sb-left' ).innerHTML = template.left
  document.getElementById( 'profile-picture' ).classList.add( thumb )
}

export function content () {
  document.getElementById( 'sb-left' ).classList.add( sbcol )
  document.getElementById( 'content' ).classList.add( col, hidden )
  document.getElementById( 'sb-right' ).classList.add( sbcol, hidden )
  header()
  navigation()
  leftsidebar()
}
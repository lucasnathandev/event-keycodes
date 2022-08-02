const insert = document.querySelector("#insert")

function updateDOM(e) {
  const spaceBarPressed = e.keyCode == "32" || e.code == "Space"
  insert.innerHTML = `
  <div class="key">
    ${spaceBarPressed ? "Space" : e.key}
    <small>event.key</small>
  </div>

  <div class="key">
    ${e.keyCode}
    <small>event.keyCode</small>
  </div>

  <div class="key">
    ${e.code}
    <small>event.code</small>
  </div>`
}

function main() {
  window.addEventListener("keyup", updateDOM)
}

main()

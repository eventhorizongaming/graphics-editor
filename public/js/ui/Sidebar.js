export class Sidebar {
  container;
  selected = 0;
  isSelector;
  buttons = [];
  handlers = [];

  constructor(isVertical, isSelector) {
    this.container = document.createElement("div");
    this.container.classList.add("sidebar");
    this.container.classList.add(isVertical ? "vertical" : "horozontal");
    this.isSelector = isSelector;
  }

  position(x, y) {
    if (x < 0) {
      this.container.style.right = - x + 'px';
    } else {
      this.container.style.left = x + 'px';
    }

    if (y < 0) {
      this.container.style.bottom = - y + 'px';
    } else {
      this.container.style.top = y + 'px';
    }
  }

  separator() {
    const separator = document.createElement("hr");
    this.container.appendChild(separator);
  }

  updateButtons() {
    for (const button of this.buttons) {
      button.classList.remove("active");
    }

    this.buttons[this.selected].classList.add("active");
  }

  addToContainer(container) {
    container.append(this.container);

    setTimeout(() => {
      const children = this.container.children;

      for (const child in children) {
        if (children[child].tagName) {

          children[child].addEventListener("click", () => {
            this.selected = child;
            this.updateButtons();
          });

          this.buttons.push(children[child]);
        }
      }

      this.updateButtons();
    }, 1);
  }

  button(iconName, callback = undefined) {
    const button = document.createElement("span");
    button.classList.add("iconify", "button");
    button.setAttribute("data-icon", iconName);
    
    this.handlers.push(callback);
    this.container.appendChild(button);
  }
}
import { Sidebar } from "./ui/Sidebar.js";

const mainSidebar = new Sidebar(true, true);
const gridMenu = new Sidebar(true, true);

/*
    <span class="iconify button active" data-icon="fluent:pen-20-filled"></span>
    <span class="iconify button" data-icon="ph:selection-bold"></span>
    <hr />
    <span class="iconify button" data-icon="ph:rectangle-bold"></span>
    <span class="iconify button" data-icon="ph:circle-bold"></span>
    <span class="iconify button" data-icon="ph:line-segment-bold"></span>
    <span class="iconify button" data-icon="ph:polygon-bold"></span>
    <hr />
    <span class="iconify button" data-icon="ph:cube-bold"></span>
*/

mainSidebar.position(48, 48);
mainSidebar.button("fluent:pen-20-filled");
mainSidebar.button("ph:selection-bold");
mainSidebar.separator();
mainSidebar.button("ph:rectangle-bold");
mainSidebar.button("ph:circle-bold");
mainSidebar.button("ph:line-segment-bold");
mainSidebar.button("ph:polygon-bold");
mainSidebar.separator();
mainSidebar.button("ph:cube-bold");

gridMenu.position(48, 352);
gridMenu.button("ph:grid-four-bold")
gridMenu.button("icon-park-outline:multi-triangular-two");

mainSidebar.addToContainer(document.body);
gridMenu.addToContainer(document.body);
import { showBookmarks } from "./bookmarks";
import { showDateAndTime } from "./date-time";

const searchForm = document.querySelector<HTMLFormElement>("#searchForm");
const accordions =
    document.querySelectorAll<HTMLButtonElement>(".accordion-title");
const bookmarksContainer = document.querySelector<HTMLDivElement>(
    "#bookmarksContainer"
);
const dateContainer = document.querySelector<HTMLSpanElement>("#date");
const timeContainer = document.querySelector<HTMLSpanElement>("#time");

searchForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    const searchInput =
        document.querySelector<HTMLInputElement>("#searchInput");
    if (!searchInput) return;
    const searchText: string = searchInput.value;
    const searchArr = searchText.split(" ");
    const q = searchArr.join("+");

    window.location.href = `https://google.com/search?q=${q}`;
});

accordions.forEach((accordion) => {
    accordion.addEventListener("click", () => {
        if (accordion.parentElement?.classList.contains("active")) {
            accordion.parentElement?.classList.remove("active");
        } else {
            accordion.parentElement?.classList.add("active");
        }
    });
});

if (bookmarksContainer) {
    showBookmarks(bookmarksContainer);
}

if (dateContainer && timeContainer) {
    showDateAndTime(dateContainer, timeContainer);
}

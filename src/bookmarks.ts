function createAccordion(parent: HTMLDivElement) {
    const accordion = document.createElement("div");
    accordion.classList.add("accordion");
    parent.appendChild(accordion);

    accordion.addEventListener("click", () => {
        if (accordion.classList.contains("active")) {
            accordion.classList.remove("active");
        } else {
            accordion.classList.add("active");
        }
    });

    return accordion;
}

function addTitle(title: string, parent: HTMLDivElement) {
    const button = document.createElement("button");
    button.classList.add("accordion-title");
    button.setAttribute("data-accordion-btn", "");
    button.innerText = title;
    parent.appendChild(button);
}

function addListItems(
    item: chrome.bookmarks.BookmarkTreeNode,
    list: HTMLUListElement
) {
    if (!item.children) return;
    for (const mark of item.children) {
        const li = document.createElement("li");
        list.appendChild(li);

        const a = document.createElement("a");
        a.innerText = mark.title;
        mark.url && (a.href = mark.url);
        li.appendChild(a);
    }
}

function addList(
    item: chrome.bookmarks.BookmarkTreeNode,
    parent: HTMLDivElement
) {
    const list = document.createElement("ul");
    list.classList.add("list");
    addListItems(item, list);
    parent.appendChild(list);
}

export async function showBookmarks(container: HTMLDivElement) {
    try {
        const bookmarksTab = await chrome.bookmarks.getSubTree("1");

        if (!bookmarksTab[0].children) return;
        for (const child of bookmarksTab[0].children) {
            const accordion = createAccordion(container);
            addTitle(child.title, accordion);
            addList(child, accordion);
        }
    } catch (err) {
        console.log(err);
    }
}

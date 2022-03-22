const GITHUB_API_TOKEN = "";

let githubProfile: any;

async function getGithubProfile() {
    try {
        const res = await fetch("https://api.github.com/users/sifatulrabbi", {
            method: "GET",
            headers: {
                Accept: "application/json",
            },
        });
        const data = await res.json();
        githubProfile = data;
        console.log(githubProfile);
    } catch (err) {
        console.log(err);
    }
}
getGithubProfile();

const searchForm = document.querySelector<HTMLFormElement>("#searchForm");

searchForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    const searchInput =
        document.querySelector<HTMLInputElement>("#searchInput");
    if (!searchInput) return;
    const searchText: string = searchInput.value;
    const searchArr = searchText.split(" ");
    const q = searchArr.join("+");

    // window.location.href = `https://google.com/search?q=${q}`;
    console.log(q);
});

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

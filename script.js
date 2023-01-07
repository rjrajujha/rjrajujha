let summary = document.getElementById("li-summary");

//linkedinAPI if default API reached max-limit
function linkedinAPI2() {
    let options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '219cbf7942msha4d6f31bfa305f8p13817ajsn9764f9fe7f8d',
            'X-RapidAPI-Host': 'linkedin-profile-data-api.p.rapidapi.com'
        }
    };

    fetch('https://linkedin-profile-data-api.p.rapidapi.com/?username=rjrajujha', options)
        .then(response => response.json())
        .then(response => {
            if (response.summary !== undefined) {
                summary.innerHTML = response.summary;
            }
        })
        .catch(err => {
            if (err) {
                summary.innerText = "Failed to Load";
                console.error(err);
            }
        });
}

//linkedinAPI default API----
function linkedinAPI() {
    let options = {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': '219cbf7942msha4d6f31bfa305f8p13817ajsn9764f9fe7f8d',
            'X-RapidAPI-Host': 'linkedin-profiles-and-company-data.p.rapidapi.com'
        },
        body: '{"profile_id":"rjrajujha","profile_type":"personal","contact_info":false,"recommendations":false,"related_profiles":false}'
    };

    fetch('https://linkedin-profiles-and-company-data.p.rapidapi.com/profile-details', options)
        .then(response => response.json())
        .then(response => {
            if (response.summary !== undefined) {
                summary.innerHTML = response.summary;
            }
            else {
                linkedinAPI2();
            }
        })
        .catch(err => {
            if (err) {
                linkedinAPI2();
                console.error(err);
            }
        });
}
linkedinAPI();

//--------------------------------------------------------------------------

let ghrepono = document.getElementById('gh-repo-no');
let ghrepo = document.getElementById('repo')

fetch('https://api.github.com/users/rjrajujha/repos')
    .then(response => response.json())
    .then(response => {
        ghrepo.innerHTML = response.map(repo =>
            `
            <div class="gh-repo">
            <div class="gh-repo-id"><a href=${repo.html_url}> ${repo.name}</a></div><br>
            <div class="gh-repo-desc">Description: ${repo.description || "Description Not Available"}</a></div><br>
            <div class="gh-repo-created"> Created at ${repo.created_at.split('T')[0]}</div>
            </div>
            `
        ).join('');
        ghrepono.innerText = response.length;
        console.log(response);
    })
    .catch(err => {
        if (err) {
            ghrepono.innerText = "Failed to Load";
            ghr.innerText = "Failed to Load";
            console.error(err);
        }
    });

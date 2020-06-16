const updateButton = document.querySelector(".button");
updateButton.addEventListener("click", function getresults() {
  var test = document.getElementById("inputfield").value;
  let baseurl = "https://dev.to/api/users/by_username?url=" + test;
  fetch(`${baseurl}`)
    .then((devtodata) => {
      return devtodata.json();
    })
    .then(displayresults)
    .catch((error) => {
      console.log(error);
    });
});

function displayresults(devtodata) {
  console.log(devtodata);

  let myName = document.querySelector(".username");
  myName.innerHTML = `${devtodata.name}`;
  console.log(myName);
  document.getElementById("userimg").src = `${devtodata.profile_image}`;
  document.getElementById("viewprofile").href = "https://dev.to/"+`${devtodata.username}`;
  document.getElementById("location").innerHTML = `${devtodata.location}`;
  document.getElementById("joined").innerHTML = `${devtodata.joined_at}`;
  document.querySelector(".twitter-link").href = "https://twitter.com/"+`${devtodata.twitter_username}`;
  document.querySelector(".github-link").href = "https://github.com/"+`${devtodata.github_username}`;
  document.querySelector(".website-link").href = `${devtodata.website_url}`;
}

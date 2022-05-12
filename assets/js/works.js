const works = [
    {
      heading : 'Data Dashboard Healthcare',
      desc : "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
      languages : [
        'html',
        'bootstrap',
        'ruby'
      ]
    },
    {
      heading : 'Website Portfolio',
      desc : "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
      languages : [
        'html',
        'bootstrap',
        'ruby'
      ]
    },
    {
      heading : 'Professional Art Printing Data More',
      desc : "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
      languages : [
        'html',
        'bootstrap',
        'ruby'
      ]
    }
  ]
  function displayCards() {
    works.forEach((work, index) => {
      let langs = "";
      work.languages.forEach((lang) => {
        langs += `<li>${lang}</li>`;
      });
      document.querySelector(".works").innerHTML += `
      <div class="work-card work-card-${index}">
        <div class="work-card-heading">
          <h4>${work.heading}</h4>
        </div>
        <div class="work-card-desc">
          <p>${work.desc}</p>
        </div>
        <div class="work-card-tools">
          <ul>
            ${langs}
          </ul>
        </div>
        <div class="work-card-button">
          <button id="${index}">See Project</button>
        </div>
      </div>
      `;
    });
  }
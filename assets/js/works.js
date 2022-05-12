const multiPost = {
  heading: 'Multi Post Stories',
  desc: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
  languages: [
    'html',
    'bootstrap',
    'ruby',
  ],
  image: 'stories.png',
  gitLink: 'https://github.com/NduatiKagiri/my_portfolio',
  liveLink: 'https://nduatikagiri.co.ke',
};

let tools = '';
multiPost.languages.forEach((tool) => {
  tools += `<li>${tool}</li>`;
});

document.querySelector('.works').innerHTML += `

<div class="stories">
  <div class="stories-img">
    <img src="assets/img/${multiPost.image}" alt="Most recent work">
  </div>
  <div class="stories-info">
    <div class="stories-info-header">
      <h4>${multiPost.heading}</h4>
    </div>
    <div class="stories-info-desc">
      <p>${multiPost.desc}</p>
    </div>
    <div class="stories-info-tools">
      <ul>
        ${tools}
      </ul>
    </div>
    <div class="stories-info-button">
      <button id="stories-info-button">See Project</button>
    </div>
  </div>
</div>
`;

const works = [
  {
    heading: 'Data Dashboard Healthcare',
    desc: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    languages: [
      'html',
      'bootstrap',
      'ruby',
    ],
    image: 'compjs4.jpeg',
    gitLink: 'https://github.com/NduatiKagiri/my_portfolio',
    liveLink: 'https://nduatikagiri.co.ke',
  },
  {
    heading: 'Website Portfolio',
    desc: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    languages: [
      'html',
      'bootstrap',
      'ruby',
    ],
    image: 'compjs4.jpeg',
    gitLink: 'https://github.com/NduatiKagiri/my_portfolio',
    liveLink: 'https://nduatikagiri.co.ke',
  },
  {
    heading: 'Professional Art Printing Data More',
    desc: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    languages: [
      'html',
      'bootstrap',
      'ruby',
    ],
    image: 'compjs4.jpeg',
    gitLink: 'https://github.com/NduatiKagiri/my_portfolio',
    liveLink: 'https://nduatikagiri.co.ke',
  },
  {
    heading: 'Data Dashboard Healthcare',
    desc: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    languages: [
      'html',
      'bootstrap',
      'ruby',
    ],
    image: 'compjs4.jpeg',
    gitLink: 'https://github.com/NduatiKagiri/my_portfolio',
    liveLink: 'https://nduatikagiri.co.ke',
  },
  {
    heading: 'Website Portfolio',
    desc: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    languages: [
      'html',
      'bootstrap',
      'ruby',
    ],
    image: 'compjs4.jpeg',
    gitLink: 'https://github.com/NduatiKagiri/my_portfolio',
    liveLink: 'https://nduatikagiri.co.ke',
  },
  {
    heading: 'Professional Art Printing Data More',
    desc: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    languages: [
      'html',
      'bootstrap',
      'ruby',
    ],
    image: 'compjs4.jpeg',
    gitLink: 'https://github.com/NduatiKagiri/my_portfolio',
    liveLink: 'https://nduatikagiri.co.ke',
  },
];

function displayCards() {
  works.forEach((work, index) => {
    let langs = '';
    work.languages.forEach((lang) => {
      langs += `<li>${lang}</li>`;
    });

    document.querySelector('.works').innerHTML += `
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

displayCards();

function modalInfo(btnID) {
  const iD = btnID;
  let heading = '';
  let desc = '';
  let langTools = '';
  let image = '';
  let liveLink = '';
  let gitLink = '';

  if (iD === 'stories-info-button') {
    heading = multiPost.heading;
    desc = multiPost.desc;
    langTools = multiPost.languages;
    image = multiPost.image;
    liveLink = multiPost.liveLink;
    gitLink = multiPost.gitLink;
  } else {
    heading = works[iD].heading;
    desc = works[iD].desc;
    langTools = works[iD].languages;
    image = works[iD].image;
    liveLink = works[iD].liveLink;
    gitLink = works[iD].gitLink;
  }

  let laTools = '';
  langTools.forEach((laTool) => {
    laTools += `<li>${laTool}</li>`;
  });

  document.querySelector('.modal-info').innerHTML = `
  <div class="modal-top">
    <div class="project-title">
      <h4>${heading}</h4>
    </div>
    <div class="project-tools">
      <ul>
        ${laTools}
      </ul>
    </div>
  </div>
  <div class="modal-bottom" id="modal-bottom">
    <div class="project-img">
      <img src="assets/img/${image}" alt="${heading} Image">
    </div>
    <div class="project-details">
      <div class="project-desc">
        <p>${desc}</p>
      </div>
      <div class="project-links">
        <a href="${liveLink}" id="project-link-1">See Live <i class="fas fa-external-link" aria-hidden="true"></i></a>
        <a href="${gitLink}" id="project-link-2">See Source <i class="fab fa-github" aria-hidden="true"></i></a>
      </div>
    </div>
  </div>
  `;
}

const modal = document.getElementById('myModal');
const btn = document.querySelectorAll('.work-card-button button');
const storiesBtn = document.getElementById('stories-info-button');
const span = document.getElementsByClassName('close')[0];

storiesBtn.onclick = () => {
  modal.style.display = 'block';
  const btnID = 'stories-info-button';
  modalInfo(btnID);
};

btn.forEach((button) => {
  button.onclick = () => {
    modal.style.display = 'block';
    const btnID = button.id;
    modalInfo(btnID);
  };
});
span.onclick = () => {
  modal.style.display = 'none';
};
window.onclick = (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};

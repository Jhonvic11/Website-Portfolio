document.getElementById('start-btn').addEventListener('click', () => {
  document.getElementById('hi').style.display = 'none';
  document.querySelector('nav').style.display = 'block';
  document.querySelectorAll('.section').forEach((section) => {
    section.style.display = 'block';
  });

  showSection('about');
});


document.querySelector('button').addEventListener('click', function() {
  document.body.style.animation = 'none'; 
  document.body.style.background = 'linear-gradient(45deg, #ff0000, #ffff00, #00ff00)'; 
  document.body.offsetHeight; 
  document.body.style.animation = 'gradientMove 10s ease infinite'; 
});

function showSection(sectionId) {
  document.querySelectorAll('.section').forEach((section) => {
    section.style.display = 'none';
  });

  const activeSection = document.getElementById(sectionId);
  if (activeSection) {
    activeSection.style.display = 'block';
  }
}

document.querySelectorAll('nav ul li a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    window.scrollTo({
      top: targetSection.offsetTop - 60,
      behavior: 'smooth'
    });
  });
});



const skillImages = document.querySelectorAll('#skills img');
const skillSection = document.getElementById('skills');

window.addEventListener('scroll', () => {
  if (isInViewport(skillSection)) {
    skillImages.forEach((img, index) => {
      setTimeout(() => {
        img.classList.add('fadeIn');
      }, index * 200); 
    });
  }

  
  let current = '';
  document.querySelectorAll('.section').forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  document.querySelectorAll('nav ul li a').forEach((link) => {
    link.classList.remove('active');
    if (link.getAttribute('href').includes(current)) {
      link.classList.add('active');
    }
  });
});


function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return rect.top >= 0 && rect.bottom <= window.innerHeight;
}

window.addEventListener('scroll', () => {
  const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrollPosition = window.scrollY;
  const scrollPercentage = (scrollPosition / docHeight) * 100;
  progressBar.style.width = `${scrollPercentage}%`;
});


window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    scrollToTopBtn.style.display = 'block';
  } else {
    scrollToTopBtn.style.display = 'none';
  }
});

const contactForm = document.querySelector('#contact form');
const contactMessage = document.getElementById('contact-message');

const projectItems = document.querySelectorAll('#projects ul li');
const modal = document.createElement('div');
modal.classList.add('modal');
document.body.appendChild(modal);

projectItems.forEach((item) => {
  item.addEventListener('click', () => {
    const modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');
    modalContent.innerHTML = `
      <h2>Project Details</h2>
      <p>Details about the ${item.textContent} project.</p>
      <button class="close-modal">Close</button>
    `;
    modal.appendChild(modalContent);

    const closeModalBtn = modalContent.querySelector('.close-modal');
    closeModalBtn.addEventListener('click', () => {
      modal.innerHTML = ''; 
    });
  });
});


const aboutText = document.querySelectorAll('#about p');
const aboutContent = [
  "I am learning more about web development and design,and constantly improving myself.",
  "Web development is a journey,<br>and I am excited about the skills I am gaining along the way.",
  "Welcome to my portfolio!<br>Here you can learn more about my projects and achievements."
];

let typingIndex = 0;
let currentParagraph = 0;
let typingInterval;

function typeParagraph() {
  const currentText = aboutContent[currentParagraph];
  const targetElement = aboutText[currentParagraph];

  if (typingIndex < currentText.length) {
    targetElement.innerHTML += currentText.charAt(typingIndex); 
    typingIndex++;
  } else {
    clearInterval(typingInterval);

    if (currentParagraph < aboutContent.length - 1) {
      currentParagraph++;
      typingIndex = 0; 
      setTimeout(() => {
        typingInterval = setInterval(typeParagraph, 100);
      }, 500); 
    }
  }
}

typingInterval = setInterval(typeParagraph, 100);


function typeText() {
  if (typingIndex < aboutContent.length) {
    aboutText.textContent += aboutContent.charAt(typingIndex);
    typingIndex++;
  } else {
    clearInterval(typingInterval);
  }
}

typingInterval = setInterval(typeText, 50);


const customCursor = document.createElement('div');
customCursor.classList.add('custom-cursor');
document.body.appendChild(customCursor);

document.body.addEventListener('mousemove', (e) => {
  customCursor.style.top = `${e.pageY}px`;
  customCursor.style.left = `${e.pageX}px`;
});


const interactiveElements = document.querySelectorAll('a, button, .skill-img');

interactiveElements.forEach(element => {
  element.addEventListener('mouseenter', () => {
    customCursor.classList.add('hovered');
  });
  element.addEventListener('mouseleave', () => {
    customCursor.classList.remove('hovered');
  });
});


window.addEventListener('scroll', () => {
  const skillsSection = document.getElementById('skills');
  if (isInViewport(skillsSection)) {
    skillsSection.classList.add('bounce');
  }
});


document.querySelectorAll('nav ul li a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault(); 

    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);

    window.scrollTo({
      top: targetSection.offsetTop - 60,
      behavior: 'smooth'
    });
  });
});


const progressBar = document.createElement('div');
progressBar.classList.add('progress-bar');
document.body.appendChild(progressBar);

window.addEventListener('scroll', () => {
  const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrollPosition = window.scrollY;
  const scrollPercentage = (scrollPosition / docHeight) * 100;
  progressBar.style.width = `${scrollPercentage}%`;
});


document.getElementById('start-btn').addEventListener('click', () => {
  document.getElementById('hi').style.display = 'none';
  document.querySelector('nav').style.display = 'block';
  document.querySelectorAll('.section').forEach((section) => {
    section.style.display = 'block';
  });

 
  setTimeout(() => {
    window.scrollTo({
      top: document.getElementById('about').offsetTop - 60, 
      behavior: 'smooth',
    });
  }, 500); 
});


const scrollToTopBtn = document.getElementById('scrollToTopBtn');

window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    scrollToTopBtn.style.display = 'block';
  } else {
    scrollToTopBtn.style.display = 'none';
  }
});

scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});




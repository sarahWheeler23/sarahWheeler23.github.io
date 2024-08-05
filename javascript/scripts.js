
  const skillContent = {
    html5: '<p>I have over 15 years of experience developing websites and web content using HTML5. All of the advertising content that I was responsible for during my 13 years as an advertising developer for a number of major financial service firms was developed in ASP Classic using HTML5, CSS3, and Vanilla JS.</p>',
    css3: '<p>I have over 15 years of experience developing websites and web content using CSS3. All of the advertising content that I was responsible for during my 13 years as an advertising developer for a number of major financial service firms was developed in ASP Classic using HTML5, CSS3, and Vanilla JS.</p>',
    js: '<p>I have over 15 years of experience developing websites and web content using Javascript. All of the advertising content that I was responsible for during my 13 years as an advertising developer for a number of major financial service firms was developed in ASP Classic using HTML5, CSS3, and Vanilla JS. I also use Javascript to complete online coding challenges such as Advent of Code.</p>',
    vuejs: '<p>I have 3 years of experience developing projects using VueJS. I primarily used VueJS to uplift the front end of the advertising software platform that my team used to deliver advertising content to our clients - the original platform was written in PHP and Jquery UI. I have also used Vue to maintain internal corporate websites.</p>',
    react: '<p>I have 2 years of experience developing projects in React. I have primarily used React to develop video advertising content through a React-based library called Remotion, and I have also used it to develop internal corporate websites.</p>',
    figma: '<p>In my role as a front-end developer, I have used Figma to develop advertising and website content from projects generated by designers.</p>',
    npm: '<p>In my role as a front-end developer, I use NPM and Node to source the different packages and libraries that I need to develop projects, both personal and professional</p>',
    node: '<p>In my role as a front-end developer, I use NPM and Node to source the different packages and libraries that I need to develop projects, both personal and professional</p>',
    git: '<p>In my role as a front-end developer, I use Git as source control when working on projects as a team.</p>'
  }
  
  function showHideMenu() {
    const mobileMenuList = document.getElementById("mobile-nav-list")
    if (mobileMenuList.style.display === 'none') {
      mobileMenuList.style.display = 'block'
    } else {
      mobileMenuList.style.display = 'none'
    }
  }

  function changeText(element) {
    console.log(skillContent[element.id])
    const textContainer = document.getElementById("skills-text")
    textContainer.innerHTML = skillContent[element.id];
    textContainer.style.display = 'block'
  }
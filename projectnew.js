// Function to update HTML elements for a specific project
function updateProjectData(project) {
    const projectId = project.id;
    const projectHTML = "../project-"+project.id +".html";

    // Check if tags are available, otherwise display a default message
    const tagsContent = project.tags ? project.tags.replace(/#/g, '<div class="tag-detail"> #').replace(/\,/g, '</div>') : " ";

    // Check if description is available, otherwise display a default message
    const descriptionContent = project.description ? project.description.replace(/\n/g, '<br><br>') : "Coming Soon";
    const shortdescriptionContent = project.shortdescription ? project.shortdescription.replace(/\n/g, '<br>') : " ";

    let html = `
    <div class="preview-detail">
      <div class="project-info">
        <div class="name-year">
          <a href="final-portfolio/${projectHTML}" class="project-name">
            <h3><span>${project.name}</span></h3>
          </a>
  
          <h4><span>${project.year}</span> </h4>
     
         <h4> <div class="short-description">
         ${shortdescriptionContent}
         </div>    </h4>
  
        
     
        </div>
  
        <h5>
          <div class="tag" span>${tagsContent}</span></div>
        </h5>
      </div>
  
      <a href="final-portfolio/${projectHTML}" class="project-image-link">
      <div class="fadeInScroll"> <img class="project-image" src="${project.image}"">  </div>
      </a>
    </div>

  `;
console.log(projectHTML);
    projectsSection.innerHTML += html;
}


let projects = [];

fetch('https://raw.githubusercontent.com/rrannah/final-portfolio/27f7a842acd7bce20e72366903ffbad3292a6467/database.json')
    .then(response => response.json())
    .then(data => {
        // Loop through each project
        projects = data;
        data.forEach(project => {
            // Update HTML for each project using the function
            updateProjectData(project);
        });
    })
    .catch(error => console.error('Error fetching data:', error));

// project.js

// Function to load project information
function loadProjectInfo(projectId, projectData) {
    const projectContainer = document.getElementById(projectId);
    const infoContainer = projectContainer.querySelector('.info');
    const videoElement = projectContainer.querySelector('video');
  
    infoContainer.innerHTML = `
      <h3>${projectData.name}</h3>
      <h4>${projectData.year}</h4>
      <h5>${projectData.tags}<br /></h5>
    `;
  
    videoElement.src = projectData.videoSource; // Assuming you have a videoSource property
  
    document.getElementById(`${projectId}Description`).innerText = projectData.description;
  }
  
  document.addEventListener('DOMContentLoaded', function () {
    // Manually set the project ID
    const projectId = 'project-5';
  
    // Fetch data from local database.json file
    fetch('database.json')
      .then(response => response.json())
      .then(data => {
        // Find the project data based on the provided projectId
        const projectData = data.find(project => `project-${project.id}` === projectId);
  
        if (projectData) {
          loadProjectInfo(projectId, projectData);
        } else {
          console.error('Project data not found.');
        }
      })
      .catch(error => console.error('Error fetching data:', error));
  });
  
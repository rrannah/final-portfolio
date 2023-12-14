// project.js

  // Function to update HTML elements for a specific project
function updateProjectData(project) {
    const projectId = project.id;

    // Create the corresponding element IDs dynamically
    const nameElementId = `project${projectId}Name`;
    const yearElementId = `project${projectId}Year`;
    const tagsElementId = `project${projectId}Tags`;
    const descriptionElementId = `project${projectId}Description`;
    const imageElementId = `project${projectId}Image`; // Add image element ID

    // Update the HTML using the dynamically created element IDs
    updateElementContent(nameElementId, project.name || "Name not available");
    updateElementContent(yearElementId, project.year || "Year not available");
    
    // Check if tags are available, otherwise display a default message
    const tagsContent = project.tags ? project.tags.replace(/#/g, '<div class="tag-detail"> #').replace(/\,/g, '</div>') : " ";
    updateElementContent(tagsElementId, tagsContent);

    // Check if description is available, otherwise display a default message
    const descriptionContent = project.description ? project.description.replace(/\n/g, '<br><br>') : "Coming Soon";
    updateElementContent(descriptionElementId, descriptionContent);

    // Check if the image is available, otherwise display a default message or handle it as per your requirements
    const imageContent = project.image ? `<img src="${project.image}" alt="Project Image">` : "Image not available";
    updateElementContent(imageElementId, imageContent);
}

// Function to update an HTML element's content if it exists
function updateElementContent(elementId, content) {
    const element = document.getElementById(elementId);

    // Check if the element exists before updating its content
    if (element) {
        element.innerHTML = content;
    } else {
        console.error(`Element not found for ID ${elementId}`);
    }
}

function scrollToTop() {
    // Use window.scrollTo to scroll to the top of the page
    window.scrollTo({
      top: 0,
      behavior: "smooth" // Optional: Add smooth scrolling effect
    });
  }
fetch('../database.json')
    .then(response => response.json())
    .then(data => {
        // Loop through each project
        data.forEach(project => {
            // Update HTML for each project using the function
            updateProjectData(project);
        });
    })
    .catch(error => console.error('Error fetching data:', error));

// Function to update HTML elements for a specific project
function updateProjectData(project) {
    const projectId = project.id;

    // Create the corresponding element IDs dynamically
    const nameElementId = `project${projectId}Name`;
    const yearElementId = `project${projectId}Year`;
    const tagsElementId = `project${projectId}Tags`;
    const descriptionElementId = `project${projectId}Description`;

    // Update the HTML using the dynamically created element IDs
    updateElementContent(nameElementId, project.name);
    updateElementContent(yearElementId, project.year);
    updateElementContent(tagsElementId, project.tags.join(', '));
    updateElementContent(descriptionElementId, project.description);

}

// Function to update an HTML element's content if it exists
function updateElementContent(elementId, content) {
    const element = document.getElementById(elementId);

    // Check if the element exists before updating its content
    if (element) {
        element.textContent = content;
    } else {
        console.error(`Element not found for ID ${elementId}`);
    }
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
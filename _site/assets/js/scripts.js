// Global variable to track currently open element
let currentOpenElement = null;

// Toggle visibility of elements
function toggleElement(id, elementType) {
  const paperElement = document.getElementById(id);
  if (!paperElement) return;
  
  const element = paperElement.querySelector(`.paper-${elementType}`);
  if (!element) return;
  
  // If there's already an open element that's different from the current one, close it
  if (currentOpenElement && currentOpenElement !== element) {
    currentOpenElement.style.display = 'none';
  }
  
  // Toggle the current element
  if (element.style.display === 'block') {
    element.style.display = 'none';
    currentOpenElement = null;
  } else {
    element.style.display = 'block';
    currentOpenElement = element;
  }
}

// Initialize all toggleable elements to be hidden
document.addEventListener('DOMContentLoaded', function() {
  const tldrElements = document.querySelectorAll('.paper-tldr');
  const citationElements = document.querySelectorAll('.paper-citation');
  
  tldrElements.forEach(element => {
    element.style.display = 'none';
  });
  
  citationElements.forEach(element => {
    element.style.display = 'none';
  });
}); 
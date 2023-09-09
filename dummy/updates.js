// updates.js

// Function to create and append anchor tags with updates
function createUpdateLink(text, href) {
    var updateLink = document.createElement('a');
    updateLink.textContent = text;
    updateLink.href = href;
    updateLink.target = '_blank';
    updateLink.style.color = 'Red';
    updateLink.style.fontSize = '15px';
    updateLink.style.fontWeight = 'bold';
    
    // Create an image element
    var img = document.createElement('img');
    img.src = 'star.gif';
    img.style.width = '22px';
  
    // Append the image and link to the updates container
    var updatesContainer = document.getElementById('updates-container');
    updatesContainer.appendChild(img);
    updatesContainer.appendChild(document.createTextNode('\u00A0')); // Add a non-breaking space
    updatesContainer.appendChild(updateLink);
    updatesContainer.appendChild(document.createTextNode('\u00A0|\u00A0')); // Add pipe separator
  }
  
  // Call the createUpdateLink function to add updates
  createUpdateLink('Update 1', '#');
  createUpdateLink('Update 2', 'News_content/33100news_09012023094810.pdf');
  createUpdateLink('Update 3', 'News_content/10320news_09022023120824.pdf');
  
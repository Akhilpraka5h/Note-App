// Selects the element with the class 'notes-container' where notes will be displayed
const notesContainer = document.querySelector(".notes-container");

// Selects the button with the class 'btn' used to create new notes
const createBtn = document.querySelector(".btn");

// Selects all elements with the class 'input-box', which represent the editable notes
let notes = document.querySelectorAll(".input-box");

// Function to load notes from localStorage and display them
function showNotes() {
  // Set the innerHTML of notesContainer to the notes stored in localStorage, or an empty string if none exist
  notesContainer.innerHTML = localStorage.getItem("notes") || "";
  // Update event listeners for the newly loaded notes
  updateNoteListners();
}

// Call showNotes to display notes when the page loads
showNotes();

// Function to update localStorage with the current HTML of notesContainer
function updateStorage() {
  // Save the current innerHTML of notesContainer to localStorage under the key 'notes'
  localStorage.setItem("notes", notesContainer.innerHTML);
}

// Add an event listener to the createBtn to handle click events
createBtn.addEventListener("click", () => {
  // Create a new 'p' element to act as a note
  let inputBox = document.createElement("p");
  // Create a new 'img' element to serve as a delete button
  let img = document.createElement("img");
  // Set the class name of the 'p' element to 'input-box'
  inputBox.className = "input-box";
  // Make the 'p' element content editable
  inputBox.setAttribute("contenteditable", "true");
  // Set the source of the 'img' element to the delete icon image
  img.src = "assests/delete.png";
  // Append the 'img' element inside the 'p' element, then append the 'p' element inside notesContainer
  notesContainer.appendChild(inputBox).appendChild(img);

  // Update event listeners for the new note
  updateNoteListners();
  // Update localStorage with the current state of notes
  updateStorage();
});

// Function to add event listeners to all notes to handle changes
function updateNoteListners() {
  // Select all elements with the class 'input-box' and add a keyup event listener to each
  document.querySelectorAll(".input-box").forEach((nt) => {
    nt.addEventListener("keyup", () => {
      // Update localStorage whenever a key is released in a note
      updateStorage();
    });
  });
}

// Add an event listener to notesContainer to handle click events
notesContainer.addEventListener("click", (e) => {
  // Check if the clicked element is an 'img' (delete button)
  if (e.target.tagName === "IMG") {
    // Remove the parent 'p' element (the note) from the container
    e.target.parentNode.remove();
    // Update localStorage to reflect the changes
    updateStorage();
  } else if (e.target.tagName === "P") {
    // Select all elements with the class 'input-box' (should already be selected, but might be useful if notes are dynamically updated)
    notes = document.querySelectorAll(".input-box");
    // Add a keyup event listener to each note
    notes.forEach((nt) => {
      nt.onkeyup = function () {
        // Update localStorage whenever a key is released in a note
        updateStorage();
      };
    });
  }
});

// Add an event listener to handle 'keydown' events globally
document.addEventListener("keydown", (event) => {
  // Check if the pressed key is 'Enter' and the focused element is content editable
  if (event.key === "Enter" && document.activeElement.isContentEditable) {
    // Prevent the default action of the 'Enter' key (e.g., creating a new line in a contenteditable element)
    event.preventDefault();
    // Insert a line break (HTML <br> tag) at the cursor's position
    document.execCommand("insertHTML", false, "<br>");
  }
});

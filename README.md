# Note-App

## Overview

The Notes Web App is a simple and intuitive application that allows users to create, edit, and delete notes. The notes are saved in the browser's local storage, ensuring that they persist even after a page refresh. This app provides a straightforward user interface for managing personal notes, making it a useful tool for jotting down ideas, reminders, or any other text-based content.

## Features

- **Create Notes:** Easily add new notes using the "Create Notes" button. Each note is represented as a contenteditable paragraph element.
- **Edit Notes:** Modify the content of your notes directly in the browser. Each note supports rich text formatting.
- **Delete Notes:** Remove individual notes by clicking the delete icon associated with each note.
- **Persistent Storage:** Notes are saved in the browser's local storage, allowing them to persist across page reloads and browser sessions.
- **Enter Key Handling:** Custom handling of the Enter key in contenteditable elements to insert line breaks rather than creating new paragraphs.

## How It Works

1. **Loading Notes:** On page load, the app retrieves notes from local storage and displays them in the `notes-container` element.
2. **Adding Notes:** Clicking the "Create Notes" button generates a new note element with an editable `contenteditable` property and a delete icon.
3. **Editing Notes:** Users can directly type into the notes, and changes are automatically saved to local storage.
4. **Deleting Notes:** Clicking the delete icon on a note removes it from the view and updates the local storage.
5. **Saving Changes:** Any changes made to notes (including edits and deletions) are saved to local storage in real-time.

## Installation

To get started with the Notes Web App, follow these steps:

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/yourusername/notes-webapp.git
   ```

2. **Navigate to the Project Directory:**

   ```bash
   cd notes-webapp
   ```

3. **Open `index.html` in Your Browser:**

   You can open the `index.html` file directly in your web browser to start using the app.

## Usage

- **Create a Note:** Click the "Create Notes" button to add a new note.
- **Edit a Note:** Click inside any note to edit its content.
- **Delete a Note:** Click the delete icon within a note to remove it.

## Technologies Used

- **HTML:** Structure of the web app.
- **CSS:** Styling of the app’s interface.
- **JavaScript:** Functionality for creating, editing, and deleting notes; persisting notes using local storage.

## Contributing

Contributions to the Notes Web App are welcome! If you have suggestions or improvements, please fork the repository, make your changes, and submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [MDN Web Docs](https://developer.mozilla.org) for detailed documentation on JavaScript, HTML, and CSS.
- [Stack Overflow](https://stackoverflow.com) for community support and troubleshooting.

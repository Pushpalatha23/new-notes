document.addEventListener("DOMContentLoaded", function () {
    const noteInput = document.getElementById("noteInput");
    const addNoteButton = document.getElementById("addNote");
    const noteList = document.getElementById("noteList");

    addNoteButton.addEventListener("click", function () {
        const noteText = noteInput.value.trim();

        if (noteText !== "") {
            const li = document.createElement("li");
            li.textContent = noteText;
            noteList.appendChild(li);
            noteInput.value = "";
        }
    });
});
function showCustomMessage() {
    var customMessage = "Saved successfully";
    window.alert(customMessage);
}
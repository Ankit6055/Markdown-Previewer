document.addEventListener("DOMContentLoaded", function () {
    const markdownInput = document.getElementById("markdown-input");
    const preview = document.getElementById("preview");
    const clearBtn = document.getElementById("clear-btn");

    // Load Marked from CDN
    import("https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js")
        .then(({ marked }) => {
            marked.setOptions({
                breaks: true, // Enable line breaks
                gfm: true // GitHub Flavored Markdown
            });

            function updatePreview() {
                const markdownText = markdownInput.value;
                preview.innerHTML = marked.parse(markdownText);
            }

            // Initialize preview with default content
            updatePreview();

            // Listen for input changes
            markdownInput.addEventListener("input", updatePreview);

            // Clear button functionality
            clearBtn.addEventListener("click", function () {
                markdownInput.value = "";
                preview.innerHTML = "";
            });
        })
        .catch(error => console.error("Error loading Marked.js:", error));
});

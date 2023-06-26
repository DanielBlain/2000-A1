const optMagic = $("#details-entry");

// Call the init function for myTimer when the DOM finishes loading
$(() => {
    $("#select-how-did-you-hear-entry").on("change", (e) => {
        if (e.target.value == "opt-magic" || e.target.value == "opt-other") {
            $(".how-did-you-hear").show();
        }
        else {
            $(".how-did-you-hear").hide();
        }
    });
})
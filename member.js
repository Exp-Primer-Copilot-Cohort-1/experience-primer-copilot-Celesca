function skillsMember() {
    var member = document.getElementById("member");
    var memberText = member.options[member.selectedIndex].text;
    var memberValue = member.options[member.selectedIndex].value;
    if (memberValue == "1") {
        var skills = document.getElementById("skills");
        skills.style.display = "block";
    } else {
        var skills = document.getElementById("skills");
        skills.style.display = "none";
    }
}
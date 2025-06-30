document.addEventListener("DOMContentLoaded", () => {
    const text = "A Developer / Musician. Crafting digital experiences.";
    const target = document.querySelector(".sub-heading");
    let index = 0;

    function type() {
        if (index < text.length) {
            target.textContent += text.charAt(index);
            index++;
            setTimeout(type, 50);
        }
    }

    target.textContent = "";
    type();
});
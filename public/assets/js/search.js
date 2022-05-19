document.querySelector("[type=submit]").addEventListener("click", search);

function search(e) {
    e.preventDefault();
    
    const input = document.querySelector("#q");
    const url = "https://www.google.com/search";
    const params = new URLSearchParams({
        q: input.value,
        sitesearch: "man7.org/linux/man-pages",
        sa: "Search online pages"
    });
    
     window.open(`${url}?${params}`, '_blank').focus();
}
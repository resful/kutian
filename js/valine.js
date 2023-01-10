new Valine({
    el: '#vcomments',
    appId: "4mLkALYiIVPJnHp5JXNQKYep-9Nh9j0Va",
    appKey: "ICyphckECpcJWwLcmu2hNCuC",
    placeholder: '有什么想说的吗？',
    avatar: "wavatar"
})

document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelectorAll('pre').forEach((block) => {
        hljs.highlightBlock(block);
    });
});

function setCookie(key, value) {
    localStorage.setItem(key, value);
}

function getCookie(key) {
    var data = localStorage.getItem(key);
    return data
}

function updateStyle() {
    if (getCookie("style") == "white") {
        $("#footer").attr("style", "color: #969696;");
        $(".flink").attr("style", "color: #969696;");
        $(".ba").attr("style", "color: #969696;");
        $("#bodyx").attr("class", "bg_while");
        $("#update_style").attr('checked', false);
    } else {
        $("#footer").attr("style", "");
        $(".flink").attr("style", "");
        $("#bodyx").attr("class", "");
        $(".ba").attr("style", "");
        $("#update_style").attr('checked', true);
    }
}

if (getCookie("style") == null) {
    setCookie("style", web_style)
    updateStyle();
} else if (getCookie("style") == "white") {
    setCookie("style", "white")
    updateStyle();
} else if (getCookie("style") == "black") {
    setCookie("style", "black")
    updateStyle();
}

$("#update_style").change(function() {
    var style = $("#update_style").is(':checked');
    if (style) {
        setCookie("style", "black")
        updateStyle();
    } else {
        setCookie("style", "white")
        updateStyle();
    }
});
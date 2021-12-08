$("#btnSum").click(function () {
    const data = {
        num1: $("#num1")[0].value,
        num2: $("#num2")[0].value,
    };
    console.log(data);
    const post = $.post("http://localhost:3000/sum", data);
    // post.fail();
    post.done(handleDone);
    post.fail(handleFail);
});

function handleDone(response, status, xhr) {
    const result = response.result;
    $(`<div>${result}</div><a href='/'>Clear</a>`).insertAfter("#mainForm");
}

function handleFail(response, status, xhr) {
    $(`<div>Error!</div><a href='/'>Clear</a>`).insertAfter("#mainForm");
}
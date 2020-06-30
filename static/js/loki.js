const markdown = require('./markdown');
console.log("lokesh");
exports.launch = ()=> {
    const ps1 = $(".change1");
    console.log(dinesh2);
    let obj = {
        raw_content: ps1,
    };
    markdown.apply_markdown(obj);
    const ps2 = $(".normal_code");
    ps2.append(obj.content);
}
window.loki = exports;


var codeArea = document.getElementById("code_area");

var myCodeMirror = CodeMirror.fromTextArea(codeArea, {
    mode:  "text/x-groovy",
    lineNumbers: true,
    styleActiveLine: true,
    matchBrackets: true,
    theme: 'monokai'
});

console.log(myCodeMirror);
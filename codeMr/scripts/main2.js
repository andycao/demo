require(["../node_modules/codemirror/lib/codemirror", "../node_modules/codemirror/mode/groovy/groovy"], function(CodeMirror) {
    

    var code_area = document.getElementById("code_area");

    var myCodeMirror = CodeMirror.fromTextArea(code_area, {

    });

    console.log(myCodeMirror);
});

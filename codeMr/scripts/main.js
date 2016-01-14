require(["../node_modules/codemirror/lib/codemirror", "../node_modules/codemirror/mode/groovy/groovy"], function(CodeMirror) {
    
    var codeArea = document.getElementById("code_area");

    var cm = CodeMirror.fromTextArea(codeArea, {
        mode:  "text/x-groovy",
        lineNumbers: true,
        theme: 'monokai',
        indentUnit: 2,
        viewportMargin: Infinity
    });

    console.log(cm);

    document.getElementById("undo").onclick = function(){
        cm.doc.undo();
    };

    document.getElementById("show").onclick = function(){
        console.log(cm.doc.getValue());
        alert(cm.doc.getValue());
    };
});
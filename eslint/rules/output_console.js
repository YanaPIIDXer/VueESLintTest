"use strict";

module.exports = function (context) {
    const comments = context.getSourceCode().getAllComments()
    return {
        "CallExpression": function (node) {
            if (!node.callee.object) { return }
            
            const name = node.callee.object.name
            if (name === 'console') {
                const line = node.callee.object.loc.start.line
                if (!comments.some(comment => comment.loc.start.line === line - 1 && comment.value.replace(/\s+/g, '').startsWith("OUTPUT:"))) {
                    context.report({node: node, message: "不要になったコンソール出力は消してください"})
                }
            }
        }
    }
}

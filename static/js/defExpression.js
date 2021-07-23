/*class defExpresson {
    constructor() {
        this.expressions = []
    }

    addExpression(expression) {
        this.expressions.push(expression)
    }

    removeExpression(expressionToRemove) {
        this.expressions = this.expressions.filter((expression) => {
            expression != expressionToRemove
        })
    }
    buildExpression() {
        var expressionQuery = ''

        if (this.expressions.length > 0) {
            expressionQuery = this.expressions.join(' && ')
        }


        return expressionQuery

    }
}*/

class defExpressionBuilder {
    constructor() {
        this.expressions = {}
    }

    addExpression(key,expression) {
        this.expressions[key] = expression
    }

    removeExpression(key) {
       delete this.expressions[key]
    }
    buildExpression() {
        let expressionQuery = ''
        if(Object.keys(this.expressions).length > 0)
        {
            expressionQuery = Object.values(this.expressions).join(' and ')
        }


        return expressionQuery

    }
}

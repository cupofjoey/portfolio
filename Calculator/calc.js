app.controller("calculatorCtrl", function($scope){
	angular.element(document).ready(function() {
  (function () {
    "use strict";
    

    var Calc = function (container, buttons, output) {
        var that = this;
        this.result = 0;
        this.operand = '';
        this.operation = '';        

        this.buttons = angular.element(buttons);
        this.output = angular.element(output);
        this.container = container;
      
        angular.element("#buttontable tr td").click(function(event) {
          console.log(that);
        })
    };
    Calc.prototype = {
        constructor: Calc,
        apply_and_set_operation: function (next_op) {
            if (next_op === 'C') {
                this.result = 0;
                this.operand = '';
                this.operation = '';
                return;
            }
            if (this.operand !== '') {
                switch (this.operation) {
                    case '':
                        this.result = +this.operand;
                        break;
                    case '+':
                        this.result += +this.operand;
                        break;
                    case '-':
                        this.result -= +this.operand;
                        break;
                    case '*':
                        this.result *= +this.operand;
                        break;
                    case '/':
                        this.result /= +this.operand;
                        break;
                }
            }
            this.operation = next_op !== '=' ? next_op : '';
            this.operand = '';
        },
        add_input: function (character) {
            if (character === '.') {
                this.operand += this.operand === '' ? '0.' : '.';
            } else if (character >= '0' && character <= '9') {
                this.operand += character;
            } else {
                this.apply_and_set_operation(character);
            }
        },
        get_operand: function () {
            return this.operand === '' ? this.result : this.operand;
        },
        on_input: function (character) {
            this.add_input(character);
            this.output.value = this.get_operand();
        },
        on_button_pressed: function (ev) {
            if (ev !== null && ev.target !== undefined && ev.target.value !== undefined) {
                this.on_input(ev.target.value);
            }
        }        
    };

    var calculator = new Calc(angular.element('calculator'), angular.element('buttontable'), angular.element('output'));
  }());
});
});


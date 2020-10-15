function getHistory() {
  return document.getElementById('history-value').innerText;
}

function printHiHistory(num) {
  document.getElementById('history-value').innerText = num;
}

function getOutput() {
  return document.getElementById('output').innerText;
}

function printOutput(num) {
  if (num === '') {
    document.getElementById('output').innerText = num;
  } else {
    document.getElementById('output-value').innerText = getFormattedNumber(num);
  }
}

function getFormattedNumber() {
  if (num == '-') {
    return '';
  }
  var n = Number(num);
  var value = n.toLocaleString('en');
  return value;
}

function reverseNumberFormar(num) {
  return Number(num.replace(/,/g, ''));
}
var operator = document.getElementsByClassName('operator');
for (var i = 0; i < operator.length; i++) {
  operator[i].addEventListener('click', function () {
    if (this.id == 'clear') {
      printHiHistory('');
      printOutput('');
    } else if (this.id == 'backspace') {
      var output = reverseNumberFormar(getOutput()).toString();
      if (output) {
        output = output.substr(0, output.length - 1);
        printOutput(output);
      }
    } else {
      var output = getOutput();
      var history = getHistory();
      if (output == '' && history != '') {
        if (isNaN(history[history.length - 1])) {
          history = history.substr(0, history - length - 1);
        }
      }
      if (output != '' || history != '') {
        output = output == '' ? output : reverseNumberFormar(output);
        history = history + output;
        if (this.id == '=') {
          var result = eval(history);
          printOutput(result);
          printHiHistory('');
        } else {
          history = history + this.id;
          printHiHistory(history);
          printOutput('');
        }
      }
    }
  });
}

var number = document.getElementsByClassName('number');
for (var i = 0; i < number.length; i++) {
  number[i].addEventListener('click', function () {
    var output = reverseNumberFormar(getOutput());
    if (ou != isNaN) {
      output = output + this.id;
      printOutput(output);
    }
  });
}

function printTitle() {
  var introText = [
    "describe('Javascript Unit Testing', () => {",
    "  it('is better than slicedBread', () => {",
    "    expect(this).to.be.above(slicedBread);",
    "  });",
    "});"
  ];

  var el = document.getElementsByClassName('intro-title')[0];
  el.innerHTML = '';
  outputChars(el, introText, 0, 0);

  function outputChars(el, lines, lineIndex, charIndex) {
    if (lineIndex >= lines.length) { return; }
    var currLineChars = lines[lineIndex].split('');

    if (charIndex >= currLineChars.length) {
      setTimeout(function() {
        // append line break after each line
        el.innerHTML += '<br />';
        // move on to next line
        outputChars(el, lines, lineIndex + 1, 0);
      }, 25);
    } else {
      setTimeout(function() {
        var currChar = currLineChars[charIndex];
        // replace spaces with &nbsp;
        (currChar == ' ') && (currChar = '&nbsp;');
        // append char to element content
        el.innerHTML += currChar;
        // move on to next char in current line
        outputChars(el, lines, lineIndex, charIndex + 1);
      }, 25);
    }
  }
}

document.addEventListener("DOMContentLoaded", printTitle, false);

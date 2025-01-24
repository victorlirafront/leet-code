function processData(input) {
  const lines = input.trim().split("\n");

  lines.forEach(line => {
      const action = line[0];
      const type = line[2];
      let s = line.slice(4);

      if (action === 'S') {
          if (type === 'M') s = s.slice(0, -2);
          else if (type === 'C') s = s[0].toLowerCase() + s.slice(1);
          s = s.replace(/([A-Z])/g, ' $1').toLowerCase();
      } else if (action === 'C') {
          s = s.split(' ').map((word, index) => {
              if (index === 0 && type !== 'C') return word.toLowerCase();
              return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
          }).join('');
          if (type === 'M') s += '()';
          else if (type === 'C') s = s.charAt(0).toUpperCase() + s.slice(1);
      }

      console.log(s.trim());
  });
}

processData('S;M;plasticCup()');
processData('C;V;mobile phone');
processData('C;C;coffee machine');
processData('S;C;LargeSoftwareBook');
processData('C;M;white sheet of paper');
processData('S;V;pictureFrame');
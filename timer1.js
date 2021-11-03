const times = process.argv.slice(2);
const beep = times;

for (let time of beep) {
  setTimeout(() => {
    process.stdout.write('\x07');
  }, time * 1000);
}

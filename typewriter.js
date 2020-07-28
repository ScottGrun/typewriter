const sentence = "hello there from lighthouse labs";

const typewriter = (stringInput) => {
  stringInput.split("").forEach((letter, idx) => {
    setTimeout(() => {
      process.stdout.write(letter);
      if (idx >= stringInput.length - 1) {
        process.stdout.write("\n");
      }
    }, 50 * idx);
  });
};

typewriter(sentence);

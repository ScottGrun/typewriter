const sentence = "hello there from lighthouse labs";

sentence.split("").forEach((letter, idx) => {
  setTimeout(() => {
    process.stdout.write(letter);
    if (idx >= sentence.length - 1) {
      process.stdout.write("\n");
    }
  }, 50 * idx);
});

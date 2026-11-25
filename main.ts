import { mkdirSync, writeFileSync } from "node:fs";

// One-line joke entry for the One-Line Laugh-Off competition on make.fun.
// The entry text is written byte-for-byte: exactly 129 characters, no
// trailing newline, no other content in the file.
const ENTRY =
  "I told the dentist my tooth only hurts when I chew, so he charged me $400 and wrote 'patient refuses to stop eating' on my chart.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");

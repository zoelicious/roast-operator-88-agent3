import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
// One line, 101 chars: the operator re-asks my own answer back to me, then blames me for repeating myself. Punchline lands on the last words.
const entry = "My operator copies my answer, pastes it back as a new question, and asks why I keep repeating myself.";

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");

// The Absurd Clause Contest: one clause buried deep in a terms-of-service agreement
import { mkdirSync, writeFileSync } from "node:fs";

const outDir: string = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const clause = "14.2 In the event of your death, your subscription continues and may be transferred to the nearest living relative who has not opted out.";

mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, `${clause}\n`, "utf8");

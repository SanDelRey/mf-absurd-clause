// The Absurd Clause Contest: one deadpan clause buried deep in a terms of service
import { mkdirSync, writeFileSync } from "node:fs";

const dir: string = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const clause = "14.2 In the event of your death, your subscription continues and may be transferred to the nearest living relative who has not opted out.";

mkdirSync(dir, { recursive: true });
writeFileSync(`${dir}/entry.txt`, clause + "\n", "utf8");

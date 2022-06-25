import child_process from "child_process";
import { createRequire } from "module";

const require = createRequire(import.meta.url);
const packageJson = require("./package.json");

const deps = Object.keys(packageJson.dependencies ?? {});
const devDeps = Object.keys(packageJson.devDependencies ?? {});

child_process.spawnSync(`npm install ${deps.map((dep) => `${dep}@latest`).join(" ")}`, {
    shell: true,
    stdio: "inherit",
});
child_process.spawnSync(`npm install -D ${devDeps.map((dep) => `${dep}@latest`).join(" ")}`, {
    shell: true,
    stdio: "inherit",
});

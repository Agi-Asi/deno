console.log(
  Deno.readTextFileSync("main.d.ts").includes("export declare const x"),
);

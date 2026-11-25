import { Config } from "@remotion/cli/config";

Config.setVideoImageFormat("jpeg");
Config.setOverwriteOutput(true);
// Composition: 1080x1920 (9:16), 30 fps — see src/timing.ts

import { eslintFix } from "@/command/eslint-fix";
import { checkGitUserInfo } from "@/command/git-user";
import { prettierFormat } from "@/command/prettier-format";
import { execCommand } from "@/helper";

async function lint() {
  await checkGitUserInfo("[\\s\\S]*", "^[a-zA-Z0-9._%+-]+@(gmail)\\.(com)$");
  await prettierFormat(["./src/", "./scripts/"]);
  await execCommand("git", ["add", "."]);
  await eslintFix(["./src/", "./scripts/"]);
}

lint();

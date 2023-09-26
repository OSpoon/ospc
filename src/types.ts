import type { CAC } from "cac";

export type ColorFunc = (str: string | number) => string;
export interface CommandSet {
  [key: string]: (cli: CAC) => void;
}

export interface CommitType {
  emoji: string;
  code: string;
  description: string;
}

export interface CommitScope {
  name: string;
  description: string;
}

export interface KeyValue {
  key: string;
  value: string;
}

export interface ProjectSource {
  name: string;
  display: string;
  description: string;
}

export interface TemplateOptions {
  projectName: string;
  framework: string;
}

export interface FrameworkVariant {
  framework: string;
  name: string;
  display: string;
  color: ColorFunc;
  customCommand?: string;
}

export interface Framework {
  name: string;
  display: string;
  color: ColorFunc;
  variants: FrameworkVariant[];
}

export interface GitUserOptions {
  name?: string;
  email?: string;
  ruleName?: string;
  ruleEmail?: string;
}

export interface CodeGeniusOptions {
  plugins: Array<
    (cli: CAC) => {
      name: string;
      setup: () => void;
    }
  >;
}

export interface GitCommitOptions {
  emoji: boolean;
  type: string;
  scope: string;
  description: string;
}

export interface ClearOptions {
  files: Array<string>;
}

export interface ImpSortOptions {
  files: Array<string>;
}

export interface RegistryOptions {
  url: string;
}
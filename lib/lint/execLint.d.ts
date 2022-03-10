import { ILintRes } from './types';
declare function execLint(paths: string[], min: number, since: string): Promise<{
    fileCount: number;
    result: ILintRes[];
}>;
export default execLint;

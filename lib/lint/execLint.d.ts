import { ILintRes } from './types';
declare function execLint(paths: string[], min: number, since: string, filterLv: string, useOutRc: boolean): Promise<{
    fileCount: number;
    result: ILintRes[];
}>;
export default execLint;

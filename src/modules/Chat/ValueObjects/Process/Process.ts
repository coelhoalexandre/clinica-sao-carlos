import { processList, ProcessType } from './ProcessType.js';

export default class Process {
  private readonly defaultProcess: ProcessType = 'FIRST_MESSAGE';
  private _process: ProcessType;

  constructor(process?: string) {
    if (typeof process === 'undefined') {
      this._process = this.defaultProcess;
      return;
    }

    this.isValidProcess(process);

    this._process = process as ProcessType;
  }

  public toString(): ProcessType {
    return this._process;
  }

  private isValidProcess(process: string): boolean {
    const isValid = processList.includes(process as ProcessType);
    if (!isValid) throw new Error('Invalid Process');
    return isValid;
  }
}

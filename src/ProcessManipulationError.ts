export default class ProcessManipulationError extends Error {
  constructor(message?: string) {
    super(message);
    this.name = 'ProcessManipulationError';

    Object.setPrototypeOf(this, ProcessManipulationError.prototype);
  }
}

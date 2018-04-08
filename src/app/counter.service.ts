export class CounterService {
  setToActiveCounter = 0;
  setToInactiveCounter = 0;

  logToActiveCounter() {
    console.log('Set to active counter: ' + ++this.setToActiveCounter);
  }

  logToInactiveCounter() {
    console.log('Set to inactive counter: ' + ++this.setToInactiveCounter);
  }
}

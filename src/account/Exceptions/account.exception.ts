export class AccountException extends Error {
    constructor(message: string) {
      super(message);
      this.name = 'AccountException';
    }
  }
  
  export class AccountNotFoundException extends AccountException {
    constructor(id: number) {
      super(`Account with id ${id} not found`);
      this.name = 'AccountNotFoundException';
    }
  }
/// <reference types="vite/client" />
declare module 'mfe-utilities/dist/index' {
    export class UserForm {
      constructor(options: { onSubmit: (formData: any) => void });
      render(container: HTMLElement): void;
    }
  }
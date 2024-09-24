// src/UserForm.ts

type UserFormProps = {
    onSubmit: (formData: { name: string; email: string }) => void;
  };
  
  export class UserForm {
    private formElement: HTMLFormElement;
  
    constructor(private props: UserFormProps) {
      this.formElement = this.createForm();
    }
  
    private createForm(): HTMLFormElement {
      const form = document.createElement('form');
  
      const nameInput = document.createElement('input');
      nameInput.type = 'text';
      nameInput.name = 'name';
      nameInput.placeholder = 'Name';
      
      const emailInput = document.createElement('input');
      emailInput.type = 'email';
      emailInput.name = 'email';
      emailInput.placeholder = 'Email';
  
      const submitButton = document.createElement('button');
      submitButton.type = 'submit';
      submitButton.innerText = 'Submit';
  
      form.appendChild(nameInput);
      form.appendChild(emailInput);
      form.appendChild(submitButton);
  
      form.onsubmit = this.handleSubmit.bind(this);
  
      return form;
    }
  
    private handleSubmit(event: Event) {
      event.preventDefault();
      const formData = new FormData(this.formElement);
      const name = formData.get('name') as string;
      const email = formData.get('email') as string;
  
      this.props.onSubmit({ name, email });
    }
  
    public render(container: HTMLElement) {
      container.appendChild(this.formElement);
    }
  }
  
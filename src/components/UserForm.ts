import './UserForm.css';

type UserFormProps = {
  onSubmit: (formData: {
    name: string;
    email: string;
    password: string;
    age: number;
    gender: string;
  }) => void;
  theme?: 'light' | 'dark';
};

export class UserForm {
  private formElement: HTMLFormElement;

  constructor(private props: UserFormProps) {
    this.formElement = this.createForm();
  }

  private createForm(): HTMLFormElement {
    const form = document.createElement('form');
    form.className = `user-form ${this.props.theme || 'light'}`;

    const fields = [
      { name: 'name', type: 'text', placeholder: 'Name' },
      { name: 'email', type: 'email', placeholder: 'Email' },
      { name: 'password', type: 'password', placeholder: 'Password' },
      { name: 'age', type: 'number', placeholder: 'Age' },
    ];

    fields.forEach(field => {
      const input = document.createElement('input');
      input.type = field.type;
      input.name = field.name;
      input.placeholder = field.placeholder;
      input.className = 'form-input';
      form.appendChild(input);
    });

    const genderSelect = document.createElement('select');
    genderSelect.name = 'gender';
    genderSelect.className = 'form-input';
    ['Select Gender', 'Male', 'Female', 'Other'].forEach(option => {
      const optionElement = document.createElement('option');
      optionElement.value = option === 'Select Gender' ? '' : option.toLowerCase();
      optionElement.textContent = option;
      genderSelect.appendChild(optionElement);
    });
    form.appendChild(genderSelect);

    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.innerText = 'Submit';
    submitButton.className = 'form-submit';
    form.appendChild(submitButton);

    form.onsubmit = this.handleSubmit.bind(this);

    return form;
  }

  private handleSubmit(event: Event) {
    event.preventDefault();
    const formData = new FormData(this.formElement);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      password: formData.get('password') as string,
      age: parseInt(formData.get('age') as string, 10),
      gender: formData.get('gender') as string,
    };

    this.props.onSubmit(data);
  }

  public render(container: HTMLElement) {
    container.appendChild(this.formElement);
  }

  public destroy() {
    this.formElement.remove();
  }
}
import React, { useEffect, useRef } from 'react';
import { UserForm } from "mfe-utilities/dist/index";

const ReactUserForm: React.FC = () => {
  const formContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (formContainerRef.current) {
      const form = new UserForm({
        onSubmit: (formData: any) => {
          console.log('Form submitted:', formData);
        }
      });
      form.render(formContainerRef.current);
    }
  }, []);

  return (
    <div className="ReactUserForm">
      <h2>User Form</h2>
      <div ref={formContainerRef} />
    </div>
  );
};

export default ReactUserForm;
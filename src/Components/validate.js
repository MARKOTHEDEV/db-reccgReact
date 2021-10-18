const validate = (person) => {
  let errors = {};
  if (!person.contactName.trim()) {
    errors.contactName = "Name is required";
  }

  if (!person.contactEmail.trim()) {
    errors.contactEmail = "Email is required";
  } else if (
    !person.contactEmail.match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
  ) {
    errors.contactEmail = "Email is not valid";
  }

  if (!person.contactSubject) {
    errors.contactSubject = "Phone is required";
  }

  if (!person.contactMessage) {
    errors.contactMessage = "Message is required";
  }

  return errors;
};

export default validate;

export const isValidEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
export const isValidPhone = (value) => /^\+?[0-9\s().-]{10,18}$/.test(value.trim());

export function validateConsultation(form) {
  const errors = {};
  if (!form.name.trim()) errors.name = 'Please enter your name.';
  if (!form.phone.trim()) errors.phone = 'Please enter your phone number.';
  else if (!isValidPhone(form.phone)) errors.phone = 'Please enter a valid phone number.';
  if (!form.email.trim()) errors.email = 'Please enter your email address.';
  else if (!isValidEmail(form.email)) errors.email = 'Please enter a valid email address.';
  if (!form.message.trim()) errors.message = 'Please tell us a little about your business.';
  return errors;
}

export function validateContact(form) {
  const errors = {};
  if (!form.name.trim()) errors.name = 'Please enter your full name.';
  if (!form.email.trim()) errors.email = 'Please enter your email address.';
  else if (!isValidEmail(form.email)) errors.email = 'Please enter a valid email address.';
  if (!form.message.trim()) errors.message = 'Please enter your message.';
  return errors;
}

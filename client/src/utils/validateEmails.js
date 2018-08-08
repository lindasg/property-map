//refer to emailregex.com
//const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const re = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export default emails => {
  if (emails) {
    const invalidEmails = emails
      .split(',')
      .map(email => email.trim())
      .filter(email => email && re.test(email) === false);

    if (invalidEmails.length) {
      return `These emails are invalid: ${invalidEmails}`;
    }
  }
};

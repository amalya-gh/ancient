(function () {
  let selectors = {
    loginModal: '#LoginModal',
    loginField: '[data-login-field]',
  };

  let data = {
    formError: 'data-error',
  };

  let loginModal = document.querySelector(selectors.loginModal);
  let loginField = document.querySelector(selectors.loginField);

  if (!loginModal) {
    return;
  }

  let passwordModal = new window.Modals('LoginModal', 'login-modal', {
    focusOnOpen: 'Password',
  });

  // Open modal if errors exist
  if (loginField.hasAttribute(data.formError)) {
    passwordModal.open();
  }
})();

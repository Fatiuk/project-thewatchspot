() => {
  const refs = {
    form: document.querySelector('.modal-form'),
    title: card.querySelector('h3.catalog-title').innerText,
  };
  form.addEventListener('submit', handleSubmitForm);
  console.log(111);
  function handleSubmitForm(e) {
    e.preventDefault();
    console.log(refs.title);
  }
};

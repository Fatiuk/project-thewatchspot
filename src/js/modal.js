(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
    modalCard: document.querySelector('.modal-card'),
    form: document.querySelector('.modal-form'),
    cards: document.querySelectorAll('.content-item'),
    selectedCard: null,
    isCardSelected: false,
  };

  function handleCardClick(event) {
    const card = event.currentTarget;
    const selectedCard = refs.selectedCard;
    refs.isCardSelected = true;

    if (selectedCard && selectedCard !== card) {
      selectedCard.classList.remove('selected-card');
    }

    card.classList.toggle('selected-card');

    refs.selectedCard = card === selectedCard ? null : card;

    const img = card.querySelector('img.catalog-img');
    const imgSrc = img.src;
    const imgSrcSet = img.srcset;
    const title = card.querySelector('h3.catalog-title').innerText;
    const price = card.querySelector('p.catalog-text').innerText;

    return {
      imgSrc,
      imgSrcSet,
      title,
      price,
    };
  }

  refs.cards.forEach(card => {
    card.addEventListener('click', handleCardClick);
  });

  refs.openModalBtn.addEventListener('click', () => {
    const selectedCard = refs.selectedCard;
    if (selectedCard) {
      const cardData = handleCardClick({ currentTarget: selectedCard });
      renderWatchModal(cardData);
    }
  });

  function renderWatchModal({ imgSrc, imgSrcSet, title, price }) {
    const modalCardHTML = `
      <img src="${imgSrc}" srcset="${imgSrcSet}" alt="watch" class="modal-img" width="276" height="274" />
      <p class="modal-text">${title}</p>
      <span class="price">${price}</span>
    `;

    refs.modalCard.innerHTML = modalCardHTML;
  }

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    if (refs.isCardSelected) {
      refs.modal.classList.toggle('is-hidden');
      document.body.classList.toggle('no-scroll');
    } else {
      alert('Please select a watch first.');
    }
  }

  refs.form.addEventListener('submit', handleSubmitForm);

  function handleSubmitForm(e) {
    e.preventDefault();
    return console.log({
      Watch: document.querySelector('.modal-text').innerText,
      Name: refs.form[0].value,
      Email: refs.form[1].value,
      Card: refs.form[2].value,
      Comment: refs.form[3].value,
    });
  }
})();

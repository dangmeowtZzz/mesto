const popup = document.querySelector('.popup'); // сам попап
const profileEditButton = document.querySelector('.profile__edit-button'); // кнопка по которой должен вызываться попап
const popupCloseButton = document.querySelector('.popup__close-button'); // кнопка по которой должен закрываться попап
const popupSaveButton = document.querySelector('.popup__save-button'); // кнопка сохранить
const popupProfileForm = document.querySelector('.popup__input-list'); // форма попапа
const profileTitle = document.querySelector('.profile__title'); // имя
const profileSubtitle = document.querySelector('.profile__subtitle'); // род деятельности
const nameInput = document.querySelector('.popup__input_type_name'); // инпут "имя"
const aboutInput = document.querySelector('.popup__input_type_about'); // инпут "род деятельности"

profileEditButton.addEventListener('click', function () {
    openPopup(popup);
    nameInput.value = profileTitle.textContent;
    aboutInput.value = profileSubtitle.textContent;
});

popupCloseButton.addEventListener('click', function () {
    closePopup(popup);
});


popupProfileForm.addEventListener('submit', function (event) {
    event.preventDefault();
    
    profileTitle.textContent = nameInput.value;
    profileSubtitle.textContent = aboutInput.value;

    popup.classList.remove('popup_opened');
});

function openPopup(popup) {
    popup.classList.add('popup_opened');
}

function closePopup(popup) {
    popup.classList.remove('popup_opened');
} 
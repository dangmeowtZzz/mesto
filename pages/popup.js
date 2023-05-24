const popup = document.querySelector('.popup'); // сам попап
const profileEditButton = document.querySelector('.profile__edit-button'); // кнопка по которой должен вызываться попап
const popupCloseButton = document.querySelector('.popup__close-button'); // кнопка по которой должен закрываться попап
const popupSaveButton = document.querySelector('.popup__save-button'); // кнопка сохранить
const popupProfileForm = document.querySelector('.popup__input-list'); // форма попапа
const profileTitle = document.querySelector('.profile__title'); // имя
const profileSubtitle = document.querySelector('.profile__subtitle'); // род деятельности
const nameInput = document.getElementById('popup__input'); // инпут "имя"
const aboutInput = document.getElementById('popup__input'); // инпут "род деятельности"

profileEditButton.addEventListener('click', function () {
    openPopup(popup);
});

popupCloseButton.addEventListener('click', function () {
    closePopup(popup);
});

nameInput.value = profileTitle.textContent;
aboutInput.value = profileSubtitle.textContent;

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

/*

openPopupButton.addEventListener('click', function () {
    openPopup(editPopup);
});

closePopupButton.addEventListener('click', function () {
    closePopup(editPopup);
});

nameInput.value = profileTitle.textContent;
professionInput.value = profileSubtitle.textContent;

editForm.addEventListener('submit', function (event) {
    event.preventDefault();

    profileTitle.textContent = nameInput.value;
    profileSubtitle.textContent = professionInput.value;

    closePopup(editPopup);
});

function openPopup(popup) {
    popup.classList.add('popup_opened');
}

function closePopup(popup) {
    popup.classList.remove('popup_opened');
} 

*/
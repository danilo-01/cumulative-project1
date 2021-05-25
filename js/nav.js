"use strict";

/******************************************************************************
 * Handling navbar clicks and updating navbar
 */

/** Show main list of all stories when click site name */

function navAllStories(evt) {
  console.debug("navAllStories", evt);
  hidePageComponents();
  putStoriesOnPage();
}

$body.on("click", "#nav-all", navAllStories);

/** Show login/signup on click on "login" */

function navLoginClick(evt) {
  console.debug("navLoginClick", evt);
  hidePageComponents();
  $loginForm.show();
  $signupForm.show();
}

$navLogin.on("click", navLoginClick);

/** When a user first logins in, update the navbar to reflect that. */

function updateNavOnLogin() {
  console.debug("updateNavOnLogin");
  $(".main-nav-links").show();
  $navLogin.hide();
  $navLogOut.show();
  $navUserProfile.text(`${currentUser.username}`).show();
}

const storyForm = document.querySelector('#submit-story');

function showStoryForm(){
  if(storyForm.style.visibility == 'visible'){
    storyForm.style.visibility = 'hidden';
  }else{
  storyForm.style.visibility = 'visible';
  }
}

const navSubmit = document.querySelector('#nav-submit')

navSubmit.addEventListener('click', (evt) => {
  evt.preventDefault()
  showStoryForm();
})

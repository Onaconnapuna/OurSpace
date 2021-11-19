
export const createBackgroundPhoto = backgroundPhoto => {
  return $.ajax({
    url: `/api/users/${backgroundPhoto.userId}/background_photos`,
    method: 'POST',
    data: {backgroundPhoto}
  })
}

export const createProfilePicture = profilePicture => {
  return $.ajax({
    url: `/api/users/${profilePicture.userId}/profile_pictures`,
    method: 'POST',
    data: {profilePicture}
  })
}
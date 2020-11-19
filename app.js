const data = [
  {
    name: 'John Doe',
    age: 32,
    gender: 'Male',
    lookingfor: 'Female',
    location: 'Boston, MA',
    image: 'https://randomuser.me/api/portraits/men/38.jpg',
  },
  {
    name: 'Jane Doe',
    age: 32,
    gender: 'Female',
    lookingfor: 'Female',
    location: 'Big Crest, Mars',
    image: 'https://randomuser.me/api/portraits/women/38.jpg',
  },
  {
    name: 'Johnathan Doever',
    age: 23,
    gender: 'Male',
    lookingfor: 'Female',
    location: 'Second Crest, Mars',
    image: 'https://randomuser.me/api/portraits/men/83.jpg',
  },
];

const profiles = profileIterator(data);

//call on load
nextProfile();

//Next evet
document.getElementById('next').addEventListener('click', nextProfile);

//Next profile display

function nextProfile() {
  const currentProfile = profiles.next().value;
  if (currentProfile !== undefined) {
    document.getElementById('profileDisplay').innerHTML = `
          <ul class="list-group"> 
              <li class="list-group-item">Name: ${currentProfile.name}</li>
              <li class="list-group-item">Age: ${currentProfile.age}</li>
              <li class="list-group-item">Location: ${currentProfile.location}</li>
              <li class="list-group-item">Preference: ${currentProfile.gender} looking for ${currentProfile.lookingfor}</li>
  
          </ul>
      `;

    document.getElementById(
      'imageDisplay'
    ).innerHTML = `<img src="${currentProfile.image}">`;
  } else {
    //no moreprofiles
    window.location.reload();
  }
}

//Profile Iterator

function profileIterator(profiles) {
  let nextIndex = 0;

  return {
    next: function () {
      return nextIndex < profiles.length
        ? { value: profiles[nextIndex++], done: false }
        : { done: true };
    },
  };
}

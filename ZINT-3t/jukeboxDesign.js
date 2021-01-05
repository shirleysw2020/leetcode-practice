/*
Design a jukebox where Astronaut can choose to play music from the library.If one Astronaut added 3 songs to the play queue and another Astronaut wants to add a song, their song will get bumped to the top
*/

class Library {
  constructor() {
    this.titles = []// Strings[1...*]
  }
  getTitles(); //Strings [1...*]
}

class Song {
  constructor(title, artist) {
    this.title = title; //String
    this.artist = artist; //String
  }
  getTitle() //for other object to retrieve title or artist
  getArtist() //for other object to retrieve artist
  play();
}

class Queue {
  constructor() {
    this.playlist = []; //Songs [0...*]
  }
  addSong(song, userId)
  getNextSong() //return next song inqueue, and from there you can call that song's own play method
  removeSong(song)
}

class User {
  constructor(id) {
    this.id = id; //String
  }
  getId() //return string

}
let mainQueue = new playingQueue();
let jack = new Astronaut(1, 8);
jack.orderSong(1, 8);

/*
function:
- astranaut browse song library and selects a song.
- add the song they select to the queue, end of line (but check if queue has three songs from one person)
*/

// ['Fly me to the moon', 'space entity', 'sunny day', 'final frontier', 'November', 'Beat it', 'hello goodbye', 'singing in the shower', 'sweet dream', 'journey to the moon'];

// orderSong(personId, songSelected) {
  //   let lastPerson= this.queue[this.queue.length - 1];
  //   if (lastPerson.personId == personId) {
  //     if (lastPerson.songId.length >= 3) { //exceed limit

  //     }
  //   } else {
  //     //just add to end
  //     let curSong = new SongRequest(personId, songId);
  //     addSongToQueue(curSong);
  //   }
  // }
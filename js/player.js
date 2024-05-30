const albums = [
    { artist: 'Operation Ivy', title: 'Energy' },
    { artist: 'Blink 182', title: 'Dude Ranch' },
    { artist: 'New Found Glory', title: 'Sticks and Stones' },
];

class Jukebox {
    constructor() {
        this.albums = [];
        this.populateAlbums();
        this.populateDropdown();
    }

    populateAlbums() {
        albums.forEach(album => {
            this.albums.push(new Album(album.artist, album.title));
        });
    }

    populateDropdown() {
        const albumSelect = document.getElementById('album-select');
        if (albumSelect) {
            this.albums.forEach(album => {
                const option = document.createElement('option');
                option.value = `${album.artist} - ${album.title}`;
                option.text = `${album.artist} - ${album.title}`;
                albumSelect.appendChild(option);
            });
        } else {
            console.error('Album select element not found!');
        }
    }

    playSelectedAlbum() {
        const albumSelect = document.getElementById('album-select');
        if (albumSelect) {
            const selectedValue = albumSelect.value;
            const foundAlbum = this.albums.find(album => `${album.artist} - ${album.title}` === selectedValue);
            if (foundAlbum) {
                foundAlbum.play();
                alert(`Playing ${selectedValue}`);
            } else {
                alert(`Album '${selectedValue}' not found`);
            }
        } else {
            console.error('Album select element not found!');
        }
    }

    favoriteAlbum() {
        let maxPlays = -1;
        let favAlbum;
        for (const album of this.albums) {
            if (album.played > maxPlays) {
                maxPlays = album.played;
                favAlbum = album;
            }
        }
        return favAlbum ? favAlbum.display() : 'No albums played yet.';
    }
}

class Album {
    constructor(artist, title) {
        this.artist = artist;
        this.title = title;
        this.played = 0;
    }

    play() {
        this.played++;
    }

    display() {
        return `${this.artist} - ${this.title}. Played ${this.played} times.`;
    }
}

window.addEventListener('DOMContentLoaded', () => {
    const jukebox = new Jukebox();

    document.getElementById('play-button').addEventListener('click', () => jukebox.playSelectedAlbum());
    document.getElementById('favorite-button').addEventListener('click', () => {
        const favoriteResult = document.getElementById('favorite-result');
        favoriteResult.textContent = `Your favorite album is: ${jukebox.favoriteAlbum()}`;
    });
});
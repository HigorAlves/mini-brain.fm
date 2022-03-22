# Mini `brain.fm`
> Senior full stack engineer coding challenge

## Instructions

### Frontend

- A website with two pages.
- Landing page.
  - With a menu that lets you choose whether to **focus**, **relax** or **sleep** (these are called **mental states**).
- An audio player that has the following properties
  - Play/Pause button that indicates the current state of the player.
  - An indicator as to which *mental state* I'm in.
  - The name of the currently playing track.
  - A skip button that takes me to the next track.
  - Possibility of going back to the landing page.

### Backend

- A database setup is not needed, in memory is totally acceptable.
- You can use any and all tooling/frameworks for this.
- Stream audio to client.

### Notes

- You do not need to setup a database, in memory is totally acceptable for all backend functionality.
- You can use any and all tooling/frameworks for this.

### Requirements

- Track urls must not be hardcoded in the front end. a server must be created to tell the front end what mp3s are
  eligible to be played for a given mental state.
  - example server: `get /tracks/focus`, `get /tracks/relax`, ...etc.
- you must use git to commit your work. use the same messaging, and commit sizes you would use for work.
- make sure to include a readme with directions on how to get your project up and running.

### Assets

- three mp3s have been provided for each mental state. you can use those as the audio files in this project.

# How to run

## Client

You need to go inside the folder named client and run `yarn run build` then `yarn start`

> You need to install all dependencies first

## Api

You need to go inside the folder named client and run `yarn run build` then `yarn start`

> You need to install all dependencies first
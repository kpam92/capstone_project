# OpenWall

[OpenWall][heroku] 

[heroku]: http://openwall.herokuapp.com

OpenWall is a full-stack web application inspired by photo web applications Flickr, Cargo Collective, and Pixieset. This application is a space for artists and creators to showcase their work in a virtual gallery space. It utilizes Ruby on Rails on the backend, with a PostgreSQL database, as well as React/Redux on the frontend.  

## Minimum Viable Product

The following will be implemented by the end of week 9:

- [ ] Hosting on Heroku
- [ ] New account creation, login, and guest/demo login
- [ ] Photos
- [ ] Albums/Series
- [ ] Comments
- [ ] Tags


## Design Docs
* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Redux Structure][redux-structure]
* [Sample State][sample-state]

[wireframes]: wireframes
[components]: component-heirarchy.md
[redux-structure]: redux-structure.md
[sample-state]: sample-state.md
[api-endpoints]: api-endpoints.md
[schema]: schema.md

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (2 days)

**Objective:** Functioning rails project with front-end Authentication

- [ ] New Rails project
- [ ] `User` model/migration
- [ ] Back end authentication (session/password)
- [ ] `StaticPages` controller and root view
- [ ] Webpack & react/redux modules
- [ ] `APIUtil` to interact with the API
- [ ] Redux cycle for frontend authentication
- [ ] User signup/signin components
- [ ] Blank landing component after signup/signin
- [ ] Style signup/signin components
- [ ] Seed users
- [ ] Review phase 1

### Phase 2: Photo Model, API, and components (2 days)

**Objective:** Photos(with descriptive information) can be uploaded, edited, and deleted.

- [ ] `Photo` model
- [ ] Seed database with a small amount of test data
- [ ] CRUD API for photos (`PhotosController`)
  - [ ] title
  - [ ] medium
  - [ ] description
- [ ] JBuilder views for photos
- [ ] Photo components and respective Redux loops
- [ ] Viewing enlarged photos on click
- [ ] Style photo components
- [ ] Seed photo

### Phase 3: Albums/Series (2 day)

**Objective:** Albums/Series hold many photos, and can be created, deleted, and edited through the API. They are seen on both explore pages as well as profiles.

- [ ] `Album` model
- [ ] Seed database with a small amount of test data
- [ ] CRUD API for albums (`AlbumsController`)
- [ ] JBuilder views for albums
- [ ] Adding photos requires an album
- [ ] uploading photos to albums
- [ ] Series View Mode implementation
- [ ] Viewing photos through albums
- [ ] Solidify the explore page by album or by random images
- [ ] Style notebook components
- [ ] Seed notebooks

### Phase 4: Comments (1 days)

**Objective:** Photos and Albums can be commented on.

- [ ] create `PhotoComment` and `AlbumComment` model
- [ ] Photos and albums can have multiple comments on them
- [ ] Implement search bar for looking for photos through tags or keywords
- [ ] Style search & tag components
 - [ ] photos in enlarged view mode show users and their comments
- [ ] Seed tags with seed data

### Phase 5: Tags (1 days)

**Objective:** Photos can be tagged with multiple tags, and tags are searchable in nav bar.

- [ ] `Tag` model and `Taggings` join table
- [ ] Fetching tags for photos
- [ ] Adding tags to photos schema
- [ ] Implement search bar for looking for photos through tags or keywords
- [ ] Style search & tag components
- [ ] Seed tags with seed data

### Phase 6: Allow Complex Styling in entire App (1 day)

**objective:** To polish and finish details to make the app look appealing and presentable.

- [ ] Implement aesthetic visual features
  - [ ] drag and drop photos into different orders
  - [ ] visually appealing rendering and appearing of photos on each page
  - [ ] drag and drop pop up menu for uploading a photo
  - [ ] multiple selection for images to upload all at once
- [ ] Reviewing and fixing any details that need better integration

### Bonus Features (TBD)
- [ ] Following other users
- [ ] favoriting both albums or specific pictures
- [ ] Utilizing both images or GIFs and videos as well (researching to see if this can be implemented sooner)

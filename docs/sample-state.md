```json
{
  currentUser: {
    id: 1,
    username: "username1"
    email: "user@user.com
  },
  forms: {
    signUp: {errors: []},
    logIn: {errors: []},
    uploadPhoto: {errors: ["description can't be blank", "title can't be blank"]}
  },
  photos: {
    1: {
      title: "Sample Piece",
      description: "description of sample piece",
      medium: " oil paint",
      author_id: 1,
      album_id: 1
      tags: {
        1: {
          id: 1
          name: "minimalist"
        }
      }
    }
  },
  albums: {
    1: {
      title: "Sample Album",
      author_id: 1,
      description: "album description",
      photos_key: [1,2,3,6,7]
    }
  }
  album_comments: {
    1: {
      body: "sample body",
      author_id: 1,
      album_id: 1
    }
  }
  photo_comments: {
    1: {
      body: "sample body",
      author_id: 1,
      photo_id: 1
    }
  }
}
```

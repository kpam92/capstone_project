## Component Heirarchy

**AuthFormContainer**
 - AuthForm

**HomeContainer**
 - Home
 - Navbar

**UserContainer**
 - AlbumIndex
  
**AlbumContainer**
 - PhotoIndex


**PhotoContainer**
 - PhotoIndex

**SearchResultsContainer**
 - Search
 - PhotoIndex
 - AlbumIndex
             
**TagContainer**
 - NotebookHeader
  + NoteIndex

**NoteIndex**
 - NoteIndexItem
  + NoteDetail
   * NoteTools
    - NotebookSearch
    - Tags
     + Tag
    * Note

**NewNoteContainer**
 - NewNote
  - RTETools
  - NewNoteButton

**NewAlbum**
 - NewAlbum
 
**NewPhoto**
 - NewPhoto

**Search**
 + AutoSearch
 * AutoSearchResults


## Routes

|Path   | Component   | 
|-------|-------------|
| "/sign-up" | "AuthFormContainer" |
| "/sign-in" | "AuthFormContainer" |
| "/home" | "HomeContainer" |
| "/home/photo/:photoId" | "PhotoContainer" |
| "/home/users/:userId" | "UserContainer" |
| "/home/users/:userId/albums/:albumId" | "AlbumContainer" |
| "/home/tag/:tagId/photo/:photoId" | "TagContainer" |
| "/home/tag/:tagId/album/:albumId" | "TagContainer" |
| "/home/search-results" | "SearchResultsContainer" |




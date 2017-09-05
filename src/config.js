export const initialState = {
  currentUser: {},
  favorites: []
}

export const searchOptions = [
  {
    text: 'Search Questions',
    id: 'searchQuestions',
    className: 'search-questions'
  },
  {
    text: 'Search by Tag',
    id: 'searchQuestionsTag',
    className: 'search-tag-input'
  },
  {
    text: 'Favorites',
    id: 'user-favorites',
    className: 'user-favorites'
  }
]

import React from 'react'
import Header from './components/Header'
import Stories from './components/Stories'
import Post from './components/Post'
import Sidebar from './components/Sidebar'

const posts = [
  { id: 1, username: 'Hemantpandey092', avatar: 'https://i.pinimg.com/236x/b0/41/ed/b041ed6928738a65269be01d7dac2c82.jpg', image: 'https://i.pinimg.com/236x/78/d1/93/78d1930c320ef4ff5162d7e83194a0a3.jpg', likes: 1234, caption: 'This is a great post!' },
  { id: 2, username: 'Anujbhatt0157', avatar: 'https://i.pinimg.com/236x/48/49/ba/4849ba2ea6517f805785071120cccc08.jpg', image: 'https://i.pinimg.com/236x/ee/6f/85/ee6f851057ba93821527e9ab89a920a8.jpg', likes: 5678, caption: 'Another awesome post!' },
  { id: 3, username: 'Manvi_0157', avatar: 'https://i.pinimg.com/236x/3d/2a/8e/3d2a8e52ff8da6e1128052f42065b1c1.jpg', image: 'https://i.pinimg.com/236x/e4/dc/a8/e4dca882d058478dcbc5569beb85f98a.jpg', likes: 208, caption: 'Another awesome post!' },
]
const suggestions = [
  { username: 'Rawat_09', avatar: 'https://i.pinimg.com/236x/e5/d8/34/e5d834f6358040368e0283c0ee71e785.jpg', suggestionReason: 'Suggested for you' },
  { username: 'Lakshita_1007', avatar: 'https://i.pinimg.com/236x/df/8f/07/df8f07ab2b671826cb14a63c091b7769.jpg', suggestionReason: 'Suggested for you' },
  { username: 'Rohit', avatar: 'https://i.pinimg.com/236x/1c/54/b5/1c54b5859d8e696d1575b2bd66967582.jpg', suggestionReason: 'Suggested for you' },
  { username: 'Gaurav', avatar: 'https://i.pinimg.com/474x/24/69/ab/2469ab2e77b427f1dca3b0d5c7959653.jpg', suggestionReason: 'Popular user' },
  { username: 'Anushka', avatar: 'https://i.pinimg.com/236x/7f/bb/50/7fbb5069e9543f28a6c530a5171c104b.jpg', suggestionReason: 'You may know' },
];
 

export default function App() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      <main className="max-w-5xl mx-auto pt-16 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row">
        <div className="w-full md:w-2/3 md:pr-8">
          <Stories />
          {posts.map((post) => (
            <Post key={post.id} {...post}  />
          ))}
        </div>
        <Sidebar username="Hemantpandey092" name="Hemant Pandey" suggestions={suggestions} />
      </main>
    </div>
  )
}
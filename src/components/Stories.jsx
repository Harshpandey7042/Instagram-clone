import React from 'react'

const stories = [
  { id: 1, username: 'Hemant', avatar: 'https://i.pinimg.com/236x/b0/41/ed/b041ed6928738a65269be01d7dac2c82.jpg' },
  { id: 2, username: 'Anuj', avatar: 'https://i.pinimg.com/236x/48/49/ba/4849ba2ea6517f805785071120cccc08.jpg' },
  { id: 3, username: 'Divya', avatar: 'https://i.pinimg.com/236x/5d/f4/18/5df418287735c4bc97bc8e4100d0a451.jpg' },
  { id: 4, username: 'Tushar', avatar: 'https://i.pinimg.com/474x/c8/33/f8/c833f8d72bc3b96cb2026e070985cb92.jpg' },
  { id: 5, username: 'Manvi', avatar: 'https://i.pinimg.com/236x/3d/2a/8e/3d2a8e52ff8da6e1128052f42065b1c1.jpg' },
]

export default function Stories() {
  return (
    <div className="bg-white border rounded-lg p-4 mb-8 overflow-x-auto">
      <div className="flex space-x-4">
        {stories.map((story) => (
          <div key={story.id} className="flex flex-col items-center flex-shrink-0">
            <img src={story.avatar} alt={story.username} className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-pink-500 p-0.5" />
            <span className="text-xs mt-1 truncate w-14 sm:w-16 text-center">{story.username}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
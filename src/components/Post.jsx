import React from 'react'
import { Heart, MessageCircle, Send, Bookmark } from 'lucide-react'

export default function Post({ username, avatar, image, likes, caption }) {
  return (
    <div className="bg-white border rounded-lg mb-8">
      <div className="flex items-center p-4">
        <img src={avatar} alt={username} className="w-8 h-8 rounded-full mr-3" />
        <span className="font-semibold">{username}</span>
      </div>
      <img src={image} alt="Post" className="w-full" />
      <div className="p-4">
        <div className="flex justify-between mb-4">
          <div className="flex space-x-4">
            <Heart className="w-6 h-6" />
            <MessageCircle className="w-6 h-6" />
            <Send className="w-6 h-6" />
          </div>
          <Bookmark className="w-6 h-6" />
        </div>
        <p className="font-semibold mb-2">{likes} likes</p>
        <p><span className="font-semibold mr-2">{username}</span>{caption}</p>
      </div>
    </div>
  )
}
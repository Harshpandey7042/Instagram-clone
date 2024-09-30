import React from 'react'
import { Home, MessageCircle, PlusSquare, Compass, Heart, User } from 'lucide-react'

export default function Header() {
  return (
    <header className="bg-white border-b fixed top-0 left-0 w-full z-10">
      <div className="max-w-5xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-xl font-semibold">Instagram</h1>
        <div className="flex space-x-4">
          <Home className="w-6 h-6" />
          <MessageCircle className="w-6 h-6 hidden sm:block" />
          <PlusSquare className="w-6 h-6" />
          <Compass className="w-6 h-6 hidden sm:block" />
          <Heart className="w-6 h-6" />
          <User className="w-6 h-6" />
        </div>
      </div>
    </header>
  )
}
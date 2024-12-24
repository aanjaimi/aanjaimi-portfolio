import React from 'react'
import { Link, Github } from 'lucide-react'

interface ButtonGradientProps {
  liveLink: string
  text: string
  isGithubLink: boolean
}

const ButtonGradient = ({ liveLink, text, isGithubLink }: ButtonGradientProps) => {

  return (
    <a
      href={liveLink}
      target="_blank"
      rel="noreferrer"
      className={`
        flex items-center gap-2 px-4 py-2
        bg-gradient-to-r
        rounded-full
        font-medium text-white
        cursor-pointer
        disabled:opacity-50 disabled:cursor-not-allowed
        transition-all duration-300
        hover:shadow-lg hover:scale-105
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#406af3] focus:ring-opacity-50
        z-50
        ${isGithubLink ? 'from-[#406af3] to-[#ff56f4]' : 'from-[#ff56f4] to-[#406af3]'}
        `}
    >
      {isGithubLink ? <Github className="w-4 h-4" /> : <Link className="w-4 h-4" />}
      {text}
    </a>
  )
}

export default ButtonGradient

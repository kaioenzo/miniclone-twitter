import {HeartIcon} from '@heroicons/react/outline'
import { useState } from 'react'

function TweetForm(){
  const MAX_TWEET_CHAR = 280
  const [text, setText] = useState('')

  function changeText(e){
    setText(e.target.value)
  }
  return(
    <div className='border-b border-silver p-4 space-y-6'>

        <div className='flex space-x-5'>
        <img className='w-7' src='/src/avatar.png'/>
        <h1 className='font-bold text-xl'>Página Inicial</h1>
        </div>

        <form className='pl-12 text-lg flex flex-col'>
          <textarea
          className='bg-transparent outline-none'
          name='text'
          value={text}
          placeholder='O que está acontecendo?'
          onChange={changeText}

          />

        <div className='flex justify-end items-center space-x-3'>
          <span className='text-sm'>{text.length}</span>
          <span>/</span>
          <span className='text-birdBlue'> {MAX_TWEET_CHAR}</span>
        <button
        className='bg-birdBlue px-5 py-2 rounded-full disabled:opacity-50'
        disabled={text.length > MAX_TWEET_CHAR}>
          Tweet
          </button>
        </div>
        </form>
    </div>
  )
}


function Tweet({name, username, children, avatar}){
  return(
    <div className="flex space-x-3 p-4 border-b border-silver">
    <div>
      <img src={avatar} class="tweet_img" />
    </div>
    <div className='space-y-1'>
      <span className="font-bold text-sm">{name}</span>{" "}
      <span className="text-sm text-silve r">@{username}</span>
      <p>
        {children}
      </p>
      <div className='flex items-center space-x-1 text-silver text-sm'>
      <HeartIcon className='w-6 stroke-1'/>
    <span>1.2M</span>
      </div>
    </div>
  </div>
  )
}
function App(){
  return(
    <>
    <TweetForm/>
    <Tweet name='Elon Musk' username="elonmusk" avatar="/src/avatar.png">Let's Make Twitter maximun fun!</Tweet>

    <Tweet name='Bolsonaro' username="bolsonaro" avatar="/src/avatar.png">Brasil acima de tudo!</Tweet>

    </>
  )
}
export default App

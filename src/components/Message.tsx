import {Button} from '@translated/babele-react'
import {useState} from 'react'

export const Message = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div>
      <h1>Test</h1>
      {isOpen && <textarea className="w-6/12" />}
      <Button
        variant={{tone: 'primary'}}
        onClick={() => {
          setIsOpen((s) => !s)
        }}
      >
        Translate the text
      </Button>
    </div>
  )
}

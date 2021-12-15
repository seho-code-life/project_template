import { FC, useState } from 'react'
import dayjs from 'dayjs'
import './index.scss'
interface Props {
  msg: string
}
const App: FC<Props> = (props) => {
  const { msg } = props
  const date = useState(dayjs().format('YYYY-MM-DD'))
  return (
    <div className="component">
      <div className="title text-4xl">{msg}</div>
      <div className="date">{date}</div>
    </div>
  )
}

export default App

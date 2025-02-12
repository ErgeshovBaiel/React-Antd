import Button from './components/Button'
import { Typography } from 'antd'
import StudentTable from './components/StudentTable'

const App = () => {
  return (
    <div>
      <Typography.Title type='danger' level={2}>Hello</Typography.Title>
      <Typography.Title type='secondary' level={3}>Hello</Typography.Title>
      <Typography.Title type='success' level={4}>Hello</Typography.Title>
      <Typography.Title type='warning' level={5}>Hello</Typography.Title>

      <Button type='text' />
      <Button />
      <Button danger />
      <Button type='link' href='https://codepen.io/pen?&editors=001' />
      <Button type='dashed' />
      <StudentTable />
    </div>
  )
}

export default App

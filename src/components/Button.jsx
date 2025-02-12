import { Button as AntButton} from 'antd'

const Button = ({type = "primary" , href , danger}) => {
  return (
    <AntButton type={type} href={href}  danger={danger}>Ok</AntButton>
  )
}

export default Button

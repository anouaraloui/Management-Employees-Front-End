import { Button, Result, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../Context/action';

const NotFound = () => {
  const history = useNavigate()
  const handleBack = () => {
    if (logout()) {
      message.success('Back to home page')
      setTimeout(() => {
        history('/')
      }, 1000);
    }
  }

  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={<Button type="primary" onClick={handleBack}>Back Home</Button>}
    />
  )
}


export default NotFound;
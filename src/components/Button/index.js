import {Container} from './styles'
import {VscLoading} from 'react-icons/vsc'
const Button = ({children, loading, ...rest}) => {
  return (
    <Container type="button" {...rest} disabled={loading}>
      {loading ? <VscLoading size={20} className="spinner"/> : children}
    </Container>
  )
}

export default Button;
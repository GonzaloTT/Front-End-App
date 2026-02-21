import { useSearchParams } from 'react-router-dom'

const [searchParams] = useSearchParams()
const location = searchParams.get('location')
import React from 'react'
import { useParams, Link} from 'react-router-dom'
import Title from './Title'

export default function ProductDetail() {
    let params = useParams()
  return (
    <div>
    <Title mainTitle="Product Information" />

      ProductDetail -- #{params.id_}
      <Link to="/">
        Return First Page
      </Link>
    </div>
  )
}

import React from 'react'
import { useParams, Link} from 'react-router-dom'

export default function ProductDetail() {
    let params = useParams()
  return (
    <div>
      ProductDetail -- #{params.id_}
      <Link to="/">
        Return First Page
      </Link>
    </div>
  )
}

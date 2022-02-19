import React from 'react'
import "./BreadCrumb.css"
import {Breadcrumb} from "react-bootstrap"

function BreadCrumbPage({page}) {
  return (
    <div>
      <Breadcrumb id="bread-crumb-div">
          <Breadcrumb.Item href="/" >Home</Breadcrumb.Item>
          <Breadcrumb.Item active >{page}</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  )
}

export default BreadCrumbPage
import React, { SVGProps } from 'react'

interface Props{
    Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element
    title: string
}

function SidebarRow({ Icon, title } : Props) {
  return (
    <div>
        <Icon />
        <p>{title}</p>
    </div>
  )
}

export default SidebarRow
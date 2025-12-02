
import React from 'react'
import { Link } from 'react-router-dom'

const components = [
  {
    title: 'Đề xuất',
    href: '/docs/primitives/alert-dialog',
    active: true,
    description:
      'A modal dialog that interrupts the user with important content and expects a response.',
  },
  {
    title: 'Phim bộ',
    href: '/docs/primitives/hover-card',
    description:
      'For sighted users to preview content available behind a link.',
  },
  {
    title: 'Phim hàn',
    href: '/docs/primitives/progress',
    description:
      'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
  },
  {
    title: 'Phim lẻ',
    href: '/docs/primitives/scroll-area',
    description: 'Visually or semantically separates content.',
  },
  {
    title: 'Hoạt hình',
    href: '/docs/primitives/tabs',
    description:
      'A set of layered sections of content—known as tab panels—that are displayed one at a time.',
  }
]
export function Navbar() {
  return (
    <>
      {components.map((component) => (
        <Link
          className={(component?.active ? 'font-bold text-green-600 ' : '') + 'ml-10 hover:text-green-400'}
          to={component.href}
        >
          {component.title}
        </Link>
      ))}
    </>
  )
}

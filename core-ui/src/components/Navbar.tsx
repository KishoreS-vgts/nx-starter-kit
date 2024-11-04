import { memo } from 'react'

import { useTranslation } from 'react-i18next'

const options: {
  name: string
  value: string
}[] = [
  {
    name: 'English',
    value: 'en',
  },
  {
    name: 'French',
    value: 'fr',
  },
  {
    name: 'German',
    value: 'de',
  },
]

function Navbar() {
  const { i18n } = useTranslation()

  return (
    <div>
      <nav className="h-10 shadow-md flex items-center px-10">
        <div>
          <label htmlFor="lang">Lang</label>
          <select
            name="lang"
            id="lang"
            value={i18n.language}
            onChange={(e) => {
              i18n.changeLanguage(e.target.value)
            }}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.name}
              </option>
            ))}
          </select>
        </div>
      </nav>
    </div>
  )
}

const NavBar = memo(Navbar)

export { NavBar }

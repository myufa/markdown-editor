/* src/components/Header.tsx */

import React from 'react'
import { FiSun } from 'react-icons/fi'
import { FaMoon } from 'react-icons/fa'

// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { css, jsx } from '@emotion/core'

// Prop check in typescript
interface Props {
  toggleTheme: () => void,
  theme: string
}

const Header: React.FC<Props> = ({ theme, toggleTheme }) => {

  return (
    <header
      css={
      css`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        background-color: ${theme === 'dark' ? `#f89541` : `#f8f541`};
        padding: 24px 32px;
        font-size: 16px;
      `}>
      <div className="header-title">
        Markdown Editor
      </div>
      <div css={
        css`
          cursor: pointer;
        `}
        onClick={toggleTheme}
      >
       {
         theme === 'dark'?
         <FaMoon />:
         <FiSun />
       }
      </div>
    </header>
  )
}

export default Header;
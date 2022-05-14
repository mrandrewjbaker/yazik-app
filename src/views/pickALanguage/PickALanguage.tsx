import { useState } from "react"

export const PickALanguage = () => {
  const [languageList, setLanguageList] = useState<string[]>();

  return (
    <div>
      <h1>PickALanguage</h1>
      <ul>
        <li>Hello</li>
      </ul>
    </div>
  )
}
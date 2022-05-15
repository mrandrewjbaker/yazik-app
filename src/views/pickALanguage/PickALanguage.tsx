import { useState } from "react"
import style from './pickALanguage.module.scss'
import { languageListOptions } from "./pickALanguage.data";


export const PickALanguage = () => {
  const [languageList, setLanguageList] = useState<string[]>();
  setLanguageList(languageListOptions)

  return (
    <div className={style.PickALanguage}>
      <h1>Pick A Language</h1>
    </div>
  )
}
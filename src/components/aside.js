import React from "react"
import { Link } from "gatsby"

export default function Aside() {
    return (
        <aside>
            <h3>Additional materials</h3>
            <ul>
                <li>
                    <a href="https://densitydesign.github.io/teaching-dd17/" target="_blank">DD17 FSDS 2021/2022</a>
                </li>
                <li>
                    <a href="https://www11.ceda.polimi.it/schedaincarico/schedaincarico/controller/scheda_pubblica/SchedaPublic.do?&evn_default=evento&c_classe=783420&polij_device_category=DESKTOP&__pj0=0&__pj1=d3f54ba7306488b75e1c05f4ce5cadfa" target="_blank">2022/2023 Course manifesto</a>
                </li>
                <li>
                    <a href="https://t.me/density18" target="_blank">Telegram Channel</a>
                </li>
                <li>
                    <a href="https://bit.ly/density18" target="_blank">Google Drive Folder</a>
                </li>
            </ul>
        </aside>
    )
}
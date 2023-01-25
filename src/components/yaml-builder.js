import React from "react"
import { Link } from "gatsby"

const YAMLbuilder = ({data}) => (
  <div className="repo">
    {data.groups.map((data, index) => {
        return <div key={`content_item_${index}`} style={{ marginBottom: `5rem` }} id={data.group}>
            <div className="card">
                <Link href={`../../reports/report_group0${index+1}.pdf`} style={{
                  backgroundImage: `url(../../reports/thumb/0${index+1}.png)`,
                  backgroundSize: `contain`,
                  backgroundPosition: `center`,
                  backgroundRepeat: `no-repeat`,
                  borderRadius: 0
                }}><Link className="inverted" href={`../../reports/report_group0${index+1}.pdf`}>Report ↗</Link></Link>
                <Link href={`../../websites/g0${index+1}/index.html`} style={{
                  backgroundImage: `url(../../websites/thumb/0${index+1}.png)`,
                  backgroundSize: `contain`,
                  backgroundPosition: `center`,
                  backgroundRepeat: `no-repeat`,
                  borderRadius: 0
                }}><Link className="inverted" href={`../../websites/g0${index+1}/index.html`}>Website ↗</Link></Link>
            </div>
            <h1>{data.title}</h1>
            <p className="authors">{data.names}</p>
            <p>{data.desc}</p>
        </div>
    })}
  </div>
)
export default YAMLbuilder
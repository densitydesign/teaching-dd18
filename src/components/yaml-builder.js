import React from "react"
import { Link } from "gatsby"

const YAMLbuilder = ({data}) => (
  <div className="repo">
    {data.groups.map((data, index) => {
        return <div key={`content_item_${index}`} style={{ marginBottom: `5rem` }} id={data.group}>
            <h3 className="authors"><span className="topic">{data.topic}</span>{data.names}</h3>
            {console.log(data.report.title)}
            <div className="group">
              <div className="card">
                <a className="cover" href={`https://densitydesign.github.io/teaching-dd18/reports/report_group0${index+1}.pdf`} style={{
                  backgroundImage: `url(https://densitydesign.github.io/teaching-dd18/reports/thumb/0${index+1}.png)`,
                  backgroundSize: `contain`,
                  backgroundPosition: `center`,
                  backgroundRepeat: `no-repeat`,
                  borderRadius: 0
                }}></a>
                <h2>{data.report.title}</h2>
                <p>{data.report.desc}</p>
              </div>
              <div className="card">
                <a className="cover" href={data.website.url} target="_blank" style={{
                  backgroundImage: `url(https://densitydesign.github.io/teaching-dd18/websites/thumb/0${index+1}.png)`,
                  backgroundPosition: `center`,
                  backgroundRepeat: `no-repeat`,
                  borderRadius: 0
                }}></a>
                <h2>{data.website.title}</h2>
                <p>{data.website.desc}</p>
              </div>
            </div>
            <p>{data.desc}</p>
        </div>
    })}
  </div>
)
export default YAMLbuilder
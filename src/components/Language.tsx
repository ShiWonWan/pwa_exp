export interface iLanguage {
    flag: string
    completed: number
    bgcolor: string
}

export const Language = ({ flag, completed, bgcolor } : iLanguage) => {
    return (
      <>
      <div className="language">
          <div className="languageContainer">
              <div className="languageFillerBar" style={{
                  width: `${completed}%`,
                  backgroundColor: bgcolor
              }}>
                  <span className="languageBar">{`${completed}%`}</span>
              </div>
          </div>
          <span className="languageDesc">{ flag }</span>
      </div>
      </>
    )
  }
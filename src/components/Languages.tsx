import { Language, iLanguage } from "./Language"

const spanish: iLanguage = {
    flag: 'Spanish',
    completed: 100,
    bgcolor: '#f5e347'
}

const english: iLanguage = {
    flag: 'English',
    completed: 87,
    bgcolor: '#3820d4'
}

const french: iLanguage = {
    flag: 'French',
    completed: 80,
    bgcolor: '#fc357b'
}

const languages: Array<iLanguage> = [
    spanish,
    english,
    french
]

export const Languages = () => {
  return (
    <>
        <section className="languages">
            <h2>Languages.</h2>
        {
                languages.map((language, index) => (
                    <Language 
                        key={ index }
                        flag={ language.flag }
                        completed={ language.completed }
                        bgcolor={ language.bgcolor }
                    />
                ))
            }

        </section>
    </>
  )
}

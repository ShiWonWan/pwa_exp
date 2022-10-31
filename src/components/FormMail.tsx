import { useState } from "react"



export const FormMail = () => {

    const [length, setLength] = useState<number>(0)
    const [message, setMessage] = useState<string>('')

    const maxMessage:number = 600

    const handleEditMessage = (newValue:string) => {
        setLength(newValue.length)
    }


    return (
        <div className="contactForm">
            <form action="">

                <label htmlFor="name">Name</label>
                <input type="text" placeholder="Your Full Name" id="name" name="name" maxLength={60} />

                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" placeholder="Where should I reply you back" maxLength={60} />

                <label htmlFor="subject">Subject</label>
                <input type="text" name="subject" id="subject" placeholder="The Reason" maxLength={60} />

                <label htmlFor="message">Message</label>
                <textarea
                    name="message"
                    id="message"
                    placeholder="Explain the reason for contacting me"
                    maxLength={maxMessage}
                    value={ message }
                    onChange={ ( e ) => {
                                            setMessage( e.target.value )
                                            handleEditMessage(e.target.value)
                                        } }
                />

                <p>{`${length} / ${maxMessage}`}</p>
                <button>Submit</button>
            </form>
        </div>
    )
}

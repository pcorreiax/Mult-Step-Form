import thankU from '../images/icon-thank-you.svg'

export default function ThankYou(){
    return(
        <>  
            <div className="thankYou">
                <img className='thankYouImg' src={thankU} />
                <h1 className='thankyouTitle'>Thank You!</h1>

                <p className='thankyouMsg'>Thanks for confirming your subscription! We hope you have fun using out plataform. If you ever need support, please fell free to email us at support@loremgaming.com</p>
            </div>
        </>
    )
}
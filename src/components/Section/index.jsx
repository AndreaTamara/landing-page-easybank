import './Section.css'

export const Section = ({bgColor,children}) => {
  return (
    <section  className='body-section' style={{backgroundColor:bgColor}}>
        {children}
    </section>
  )
}

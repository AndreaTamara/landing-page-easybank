import './Home.css'
import { easyBankTexts } from '../assets/texts'
import { Info } from '../components/Info'
import { RequestButton } from '../components/RequestButton'
import { Section } from '../components/Section'

export const Home = () => {
  return (
    <>
      <Section bgColor='var(--Very-Light-Gray)'>
        <Info
          titleSize='3.8rem'
          bodySize='1.6rem'
          title={easyBankTexts.hero.title}
          body={easyBankTexts.hero.body}
          width='40%'
        />
        <RequestButton />
      </Section>
      <Section bgColor='var(--Light-Grayish-Blue)'>
        <Info
          titleSize='3.2rem'
          bodySize='1.6rem'
          title={easyBankTexts.section.title}
          body={easyBankTexts.section.body}
          width='50%'
        />
        <div className='benefits-container'>
          {easyBankTexts.benefits.map(benefit => {
            return (
              <Info
                key={benefit.title}
                titleSize='2.6rem'
                bodySize='1.6rem'
                title={benefit.title}
                body={benefit.body}
              >
                <img className='icon-benefit' src={benefit.url} alt={benefit.title}/>
              </Info>
            )
          }
          )
          }
        </div>
      </Section>
      <Section bgColor='var(--Very-Light-Gray)'>
        home
      </Section>
    </>

  )
}

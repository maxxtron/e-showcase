import { useLang } from '@/hooks/useLang'

const Header = () => {
  // const { lang, translations } = useLang()
  console.log(useLang())

  return (
    <header className='header'>
      <div className='container header__container'>
        <p>test</p>
        <button className='btn-reset header__burger'></button>
      </div>
    </header>
  )
}

export default Header
